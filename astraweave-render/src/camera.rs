use glam::{Mat4, Vec2, Vec3, Quat};

pub struct Camera {
    pub position: Vec3,
    pub yaw: f32,
    pub pitch: f32,
    pub fovy: f32,
    pub aspect: f32,
    pub znear: f32,
    pub zfar: f32,
}

impl Camera {
    pub fn view_matrix(&self) -> Mat4 {
        let dir = Self::dir(self.yaw, self.pitch);
        Mat4::look_to_rh(self.position, dir, Vec3::Y)
    }

    pub fn proj_matrix(&self) -> Mat4 {
        Mat4::perspective_rh(self.fovy, self.aspect.max(0.01), self.znear, self.zfar)
    }

    pub fn vp(&self) -> Mat4 { self.proj_matrix() * self.view_matrix() }

    fn dir(yaw: f32, pitch: f32) -> Vec3 {
        let cy = yaw.cos();
        let sy = yaw.sin();
        let cp = pitch.cos();
        let sp = pitch.sin();
        Vec3::new(cy*cp, sp, sy*cp).normalize()
    }
}

pub struct CameraController {
    pub speed: f32,
    pub sensitivity: f32,
    fwd: f32, back: f32, left: f32, right: f32, up: f32, down: f32,
    dragging: bool,
    last_mouse: Option<Vec2>,
}

impl CameraController {
    pub fn new(speed: f32, sensitivity: f32) -> Self {
        Self{ speed, sensitivity, fwd:0.0, back:0.0, left:0.0, right:0.0, up:0.0, down:0.0, dragging:false, last_mouse:None }
    }

    pub fn process_keyboard(&mut self, key: winit::keyboard::KeyCode, pressed: bool) {
        let v = if pressed {1.0} else {0.0};
        match key {
            winit::keyboard::KeyCode::KeyW => self.fwd = v,
            winit::keyboard::KeyCode::KeyS => self.back = v,
            winit::keyboard::KeyCode::KeyA => self.left = v,
            winit::keyboard::KeyCode::KeyD => self.right = v,
            winit::keyboard::KeyCode::Space => self.up = v,
            winit::keyboard::KeyCode::ShiftLeft | winit::keyboard::KeyCode::ShiftRight => self.down = v,
            _ => {}
        }
    }

    pub fn process_mouse_button(&mut self, button: winit::event::MouseButton, pressed: bool) {
        if button == winit::event::MouseButton::Right { self.dragging = pressed; if !pressed { self.last_mouse=None; } }
    }

    pub fn process_mouse_move(&mut self, camera: &mut Camera, pos: Vec2) {
        if self.dragging {
            if let Some(last) = self.last_mouse {
                let delta = (pos - last) * self.sensitivity;
                camera.yaw   -= delta.x;
                camera.pitch -= delta.y;
                camera.pitch = camera.pitch.clamp(-1.54, 1.54);
            }
            self.last_mouse = Some(pos);
        }
    }

    pub fn update_camera(&self, camera: &mut Camera, dt: f32) {
        let dir = super::camera::Camera::dir(camera.yaw, camera.pitch);
        let right = dir.cross(Vec3::Y).normalize();
        let up = Vec3::Y;

        let mut vel = Vec3::ZERO;
        vel += dir * (self.fwd - self.back);
        vel += right * (self.right - self.left);
        vel += up * (self.up - self.down);
        if vel.length_squared() > 0.0 {
            camera.position += vel.normalize() * self.speed * dt;
        }
    }
}
