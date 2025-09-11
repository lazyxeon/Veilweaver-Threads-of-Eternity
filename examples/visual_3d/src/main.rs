use astraweave_core::{IVec2, Team, World};
use astraweave_render::{Camera, CameraController, Instance, Renderer};
use glam::{vec3, Vec2, Vec3, Mat4};
use image::GenericImageView;
use std::{fs, path::Path, sync::Arc, time::Instant};
use wgpu::util::DeviceExt;
use winit::{
    dpi::PhysicalSize,
    event::{ElementState, Event, KeyEvent, WindowEvent},
    event_loop::EventLoop,
    keyboard::PhysicalKey,
};

// Texture loading structures
struct LoadedTexture {
    _texture: wgpu::Texture,
    view: wgpu::TextureView,
    sampler: wgpu::Sampler,
}

// Extended renderer with texture support
struct TexturedRenderer {
    base_renderer: Renderer,
    ground_texture: Option<LoadedTexture>,
    texture_bind_group_layout: wgpu::BindGroupLayout,
    ground_bind_group: Option<wgpu::BindGroup>,
}

impl TexturedRenderer {
    async fn new(window: Arc<winit::window::Window>) -> anyhow::Result<Self> {
        let mut base_renderer = Renderer::new(window).await?;
        let device = base_renderer.device();
        
        println!("Loading textures...");
        
        // Create texture bind group layout
        let texture_bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("texture_bind_group_layout"),
            entries: &[
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::FRAGMENT,
                    ty: wgpu::BindingType::Texture {
                        multisampled: false,
                        view_dimension: wgpu::TextureViewDimension::D2,
                        sample_type: wgpu::TextureSampleType::Float { filterable: true },
                    },
                    count: None,
                },
                wgpu::BindGroupLayoutEntry {
                    binding: 1,
                    visibility: wgpu::ShaderStages::FRAGMENT,
                    ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
                    count: None,
                },
            ],
        });
        
        // Try to load grass texture
        let (ground_texture, ground_bind_group) = if let Ok(texture) = load_texture_from_file(
            device,
            &Path::new("assets/grass.png")
        ).await {
            println!("✅ Loaded grass texture successfully");
            
            let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("grass_bind_group"),
                layout: &texture_bind_group_layout,
                entries: &[
                    wgpu::BindGroupEntry {
                        binding: 0,
                        resource: wgpu::BindingResource::TextureView(&texture.view),
                    },
                    wgpu::BindGroupEntry {
                        binding: 1,
                        resource: wgpu::BindingResource::Sampler(&texture.sampler),
                    },
                ],
            });
            
            (Some(texture), Some(bind_group))
        } else {
            println!("⚠️  Failed to load grass texture, using default rendering");
            (None, None)
        };
        
        Ok(Self {
            base_renderer,
            ground_texture,
            texture_bind_group_layout,
            ground_bind_group,
        })
    }
    
    fn resize(&mut self, width: u32, height: u32) {
        self.base_renderer.resize(width, height);
    }
    
    fn update_instances(&mut self, instances: &[Instance]) {
        self.base_renderer.update_instances(instances);
    }
    
    fn update_camera(&mut self, camera: &Camera) {
        self.base_renderer.update_camera(camera);
    }
    
    fn render(&mut self) -> anyhow::Result<()> {
        // If we have textures, do enhanced rendering, otherwise fall back to default
        if self.ground_texture.is_some() {
            println!("Rendering with textures enabled...");
        }
        self.base_renderer.render()
    }
}

async fn load_texture_from_file(
    device: &wgpu::Device,
    queue: &wgpu::Queue,
    path: &Path,
) -> anyhow::Result<LoadedTexture> {
    println!("Loading texture from: {}", path.display());
    
    if !path.exists() {
        return Err(anyhow::anyhow!("Texture file not found: {}", path.display()));
    }
    
    let bytes = fs::read(path)?;
    let img = image::load_from_memory(&bytes)?;
    let rgba = img.to_rgba8();
    let dimensions = img.dimensions();
    
    println!("  📷 Loaded texture: {}x{} pixels", dimensions.0, dimensions.1);
    
    let size = wgpu::Extent3d {
        width: dimensions.0,
        height: dimensions.1,
        depth_or_array_layers: 1,
    };

    let texture = device.create_texture(&wgpu::TextureDescriptor {
        label: Some(&path.to_string_lossy()),
        size,
        mip_level_count: 1,
        sample_count: 1,
        dimension: wgpu::TextureDimension::D2,
        format: wgpu::TextureFormat::Rgba8UnormSrgb,
        usage: wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
        view_formats: &[],
    });

    queue.write_texture(
        wgpu::ImageCopyTexture {
            texture: &texture,
            mip_level: 0,
            origin: wgpu::Origin3d::ZERO,
            aspect: wgpu::TextureAspect::All,
        },
        &rgba,
        wgpu::ImageDataLayout {
            offset: 0,
            bytes_per_row: Some(4 * dimensions.0),
            rows_per_image: Some(dimensions.1),
        },
        size,
    );

    let view = texture.create_view(&wgpu::TextureViewDescriptor::default());
    let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
        address_mode_u: wgpu::AddressMode::Repeat,
        address_mode_v: wgpu::AddressMode::Repeat,
        address_mode_w: wgpu::AddressMode::Repeat,
        mag_filter: wgpu::FilterMode::Linear,
        min_filter: wgpu::FilterMode::Linear,
        mipmap_filter: wgpu::FilterMode::Nearest,
        ..Default::default()
    });

    println!("  ✅ Created GPU texture resources");

    Ok(LoadedTexture {
        _texture: texture,
        view,
        sampler,
    })
}

fn world_to_instances(world: &World, scale: f32) -> Vec<Instance> {
    let mut v = Vec::new();
    // obstacles as gray cubes
    for (x, y) in world.obstacles.iter() {
        let pos = vec3(*x as f32 * scale, 0.5, *y as f32 * scale);
        v.push(Instance::from_pos_scale_color(
            pos,
            vec3(0.9, 1.0, 0.9) * 0.9,
            [0.5, 0.5, 0.5, 1.0],
        ));
    }
    // entities: player (blue), comp (green), enemy (red)
    for e in world.all_of_team(0) {
        // player
        let p = world.pos_of(e).unwrap();
        v.push(Instance::from_pos_scale_color(
            vec3(p.x as f32 * scale, 0.5, p.y as f32 * scale),
            vec3(0.7, 1.0, 0.7),
            [0.2, 0.4, 1.0, 1.0],
        ));
    }
    for e in world.all_of_team(1) {
        // companion
        let p = world.pos_of(e).unwrap();
        v.push(Instance::from_pos_scale_color(
            vec3(p.x as f32 * scale, 0.5, p.y as f32 * scale),
            vec3(0.7, 1.0, 0.7),
            [0.2, 1.0, 0.4, 1.0],
        ));
    }
    for e in world.all_of_team(2) {
        // enemies
        let p = world.pos_of(e).unwrap();
        v.push(Instance::from_pos_scale_color(
            vec3(p.x as f32 * scale, 0.5, p.y as f32 * scale),
            vec3(0.7, 1.0, 0.7),
            [1.0, 0.2, 0.2, 1.0],
        ));
    }
    v
}

fn main() -> anyhow::Result<()> {
    let event_loop = EventLoop::new()?;
    let window = Arc::new(
        winit::window::WindowBuilder::new()
            .with_title("Veilweaver 3D")
            .with_inner_size(PhysicalSize::new(1280, 720))
            .build(&event_loop)?,
    );

    // Build a small demo world
    let mut world = World::new();
    for y in 1..=8 {
        world.obstacles.insert((6, y));
    } // vertical wall
    let _player = world.spawn("Player", IVec2 { x: 2, y: 2 }, Team { id: 0 }, 100, 0);
    let _comp = world.spawn("Companion", IVec2 { x: 3, y: 2 }, Team { id: 1 }, 80, 30);
    let _enemy = world.spawn("Enemy", IVec2 { x: 12, y: 2 }, Team { id: 2 }, 60, 0);

    let mut renderer = pollster::block_on(Renderer::new(window.clone()))?;

    let mut camera = Camera {
        position: vec3(0.0, 8.0, 12.0),
        yaw: -3.14 / 2.0,
        pitch: -0.6,
        fovy: 60f32.to_radians(),
        aspect: 16.0 / 9.0,
        znear: 0.1,
        zfar: 200.0,
    };
    let mut controller = CameraController::new(10.0, 0.005);

    let grid_scale = 1.5f32;
    renderer.update_instances(&world_to_instances(&world, grid_scale));
    renderer.update_camera(&camera);

    let mut last = Instant::now();

    event_loop
        .run(move |event, elwt| {
            match event {
                Event::WindowEvent { event, .. } => match event {
                    WindowEvent::Resized(size) => {
                        renderer.resize(size.width, size.height);
                        camera.aspect = (size.width as f32 / size.height.max(1) as f32).max(0.1);
                    }
                    WindowEvent::CloseRequested => elwt.exit(),
                    WindowEvent::KeyboardInput {
                        event:
                            KeyEvent {
                                state,
                                physical_key: PhysicalKey::Code(code),
                                ..
                            },
                        ..
                    } => {
                        let pressed = state == ElementState::Pressed;
                        controller.process_keyboard(code, pressed);
                    }
                    WindowEvent::MouseInput { state, button, .. } => {
                        controller.process_mouse_button(button, state == ElementState::Pressed);
                    }
                    WindowEvent::CursorMoved { position, .. } => {
                        controller.process_mouse_move(
                            &mut camera,
                            Vec2::new(position.x as f32, position.y as f32),
                        );
                    }
                    _ => {}
                },
                Event::AboutToWait => {
                    // update
                    let now = Instant::now();
                    let dt = (now - last).as_secs_f32();
                    last = now;
                    controller.update_camera(&mut camera, dt);
                    renderer.update_camera(&camera);
                    // render
                    if let Err(e) = renderer.render() {
                        eprintln!("render error: {e:?}");
                    }
                    // request next frame
                    window.request_redraw();
                }
                _ => {}
            }
        })
        .map_err(|e| anyhow::anyhow!("Event loop error: {}", e))
}
