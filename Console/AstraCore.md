4) Console (codename: AstraCore AIC-01)
4.1 Performance targets

CPU: 8–12 cores (ARM64 or x86) @ 3+ GHz, strong single-thread perf for sim.

GPU: 10–20 TFLOPS FP32 (modern upscaler support, Vulkan first-class).

NPU: 100–200 TOPS INT8 (with FP16/bfloat16 paths) for on-device LLM + policy nets.

Memory: 32–64 GB unified; Storage: 1–2 TB NVMe Gen4; I/O: Wi-Fi 7, BT 5.4, 2×USB-C, HDMI 2.1.

Latency budget: reflex AI calls ≤150 ms; end-to-end input→action ≤80 ms (combat).

Acoustics/Thermals: <30 dBA typical; vapor chamber + intelligent curves.

4.2 OS & platform services

OS: Linux LTS, low-latency kernel; immutable base + OTA A/B updates.

Graphics/Audio: Vulkan, PipeWire; Net: QUIC-first, roll-back safe.

Security: secure boot, TEE for model slots & companion profiles; per-game sandboxes.

Companion Daemon: always-on service hosting the player’s AI (IPC via gRPC/protobuf).

Creator Store: signed persona packs, boss modules, maps; 10% store fee cap.

5) SDK for Devs/Modders

Core SDK: C/C++/Rust bindings; Unity/Godot adapters (for teams not on AstraWeave).

Schemas & Tools: protobufs for snapshots/intents; CLI for persona packing/signing.

Test Harness: headless arena sim, fuzzers, replay runner, KPIs (assist rate, revive saves, fight time, friendly-fire).

Samples: “Hello Companion” (smoke→move→cover), “Adaptive Boss” (fortify vs flank).

Telemetry (opt-in): anonymized encounter metrics; per-title dashboards.
