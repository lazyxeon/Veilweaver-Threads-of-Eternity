# Engine API (Overview)

This is a living overview of the public engine interfaces. Link specific crate docs as they stabilize.

- **World & Entities**: ECS snapshot and deterministic simulation loop.
- **Navigation**: navmesh bake, path requests, movement constraints.
- **Physics**: Rapier3D integration, character controller.
- **Rendering**: WGPU forward pipeline, camera rig, scene graph primitives.
- **Audio**: spatial sound + VO mapping.

> Tip: keep Rustdoc comments on public structs/functions in `astraweave-core`, `-physics`, `-render` etc. `cargo doc --open` renders the API locally.