# Non-Dev Overview: What This Code Can Do (Today)

This repo is a **working skeleton** of an AI-native game stack:

- **AstraWeave (engine):** the rules-enforcer. AI proposes plans; the engine validates and executes them fairly (no cheating).
- **AI Companions:** a teammate that can plan actions, follow your orders, and build a portable profile of what “works” with you.
- **AI Boss Director:** “living boss brains” that reshape the battlefield (fortify, collapse bridges, spawn waves) within strict fairness budgets.
- **Tooling:** persona packs, scripting for encounter design, local/remote AI planning, co-op networking, and a simple visual overlay.

> You can **run all of this on PC right now**. The “console” piece (AstraCore) is a design target; today’s code is the PC dev kit that proves the gameplay loop.

---

## What You Can Do Right Now (No Game Dev Needed)

### ✅ 1) Watch an AI teammate make a plan and the engine enforce it
- **Demo:** `hello_companion`
- **What you’ll see:** The companion throws smoke, moves up, and lays down cover fire. If something’s not allowed (no path, blocked line-of-sight, ability on cooldown), the engine rejects it.
- **Why it matters:** This is the core “AI proposes → engine validates” loop that keeps gameplay fair.

### ✅ 2) See a boss change the arena on the fly
- **Demo:** `adaptive_boss`
- **What you’ll see:** The Boss Director chooses to **fortify**, **collapse**, or **spawn**. A small “budget” keeps it fair and readable, so bosses don’t cheat.
- **Why it matters:** Every fight can feel fresh without breaking the rules.

### ✅ 3) Experience multi-phase boss escalation with telegraphed “tells”
- **Demo:** `phase_director`
- **What you’ll see:** As the boss’s HP drops, it shifts phases (e.g., “Dreadwatch” → “Lashing Gale”), announces changes (telegraphs), and uses new tactics.
- **Why it matters:** Bosses feel like living strategists, not scripted set pieces.

### ✅ 4) Save your companion’s personality & memories as a portable file
- **Demo:** `companion_profile`
- **What you’ll see:** A `.cprof` file gets created with **persona**, **facts**, **episodes**, and **skills**, plus a content hash (“signature”) so you can verify integrity.
- **Why it matters:** Your companion becomes **your** legacy—carry it between titles built on this engine.

### ✅ 5) Load a “Persona Pack” from a ZIP and instantly reskin behavior
- **Demo:** `persona_loader` (use a sample `sniper_persona.zip`)
- **What you’ll see:** A `persona_manifest.toml` inside a ZIP turns into a ready-to-use `.cprof` with preferences, skills, and prefilled facts.
- **Why it matters:** Creators/modders can share companions like “builds,” not just cosmetic skins.

### ✅ 6) Author encounter budgets & hints with a tiny script (Rhai)
- **Demo:** `rhai_authoring`
- **What you’ll see:** A small script returns a **DirectorBudget** (how many fortifies/spawns/collapses) and **design hints** (e.g., “prefer bridge choke”), based on map size/difficulty.
- **Why it matters:** Designers can tune fights without touching engine code.

### ✅ 7) Let an external AI service produce action plans (safe & structured)
- **Demo:** `llm_toolcall` (uses a mock; can be swapped for a local model)
- **What you’ll see:** The AI outputs **strict JSON plans** (e.g., `MoveTo`, `Throw smoke`, `CoverFire`). The engine still validates everything.
- **Why it matters:** You can plug in local or cloud AI later without risking exploits.

### ✅ 8) Send snapshots over WebSocket and get back plans
- **Demo:** `ipc_loopback`
- **What you’ll see:** A tiny WebSocket “companion service” turns a world snapshot into a PlanIntent and sends it back—like a real game would do.
- **Why it matters:** Swap between local, edge, or cloud AI by changing one endpoint.

### ✅ 9) See a simple on-screen visualizer of the arena & the plan
- **Demo:** `debug_overlay`
- **What you’ll see:** A window drawing the grid, obstacles, Player/Companion/Enemy, and the planned actions.
- **Why it matters:** Understand what the AI intends and how the engine will apply it.

### ✅ 10) Try a tiny server-authoritative co-op loop
- **Demo:** `coop_server` + `coop_client`
- **What you’ll see:** The server owns the world. A client proposes an AI plan; the server validates and applies it, then broadcasts the updated state.
- **Why it matters:** This is how we keep multiplayer honest—no client-side “magic.”

---

## What This Unlocks for Veilweaver (in plain language)

- **A real teammate:** Your AI ally learns what works with you and follows your style—careful, aggressive, resource-minded, whatever.
- **Bosses that adapt:** They fortify chokepoints, collapse bridges, or flank based on how you and your companion like to fight.
- **Replayable, personal stories:** The same quest won’t play the same way twice, because your ally and the boss both change the situation.
- **Creator ecosystem:** Personas and encounter scripts are files anyone can make and share—without breaking game balance.

---

## How to Run Demos (quick guide)

> You’ll need Rust installed. From the repo root:

```bash
# 1) Companion plan → engine validation loop
cargo run -p hello_companion

# 2) Boss makes terrain moves within a fair budget
cargo run -p adaptive_boss

# 3) Multi-phase boss with telegraphed shifts
cargo run -p phase_director

# 4) Create and verify a portable companion profile
cargo run -p companion_profile

# 5) Load a persona ZIP → .cprof (have sniper_persona.zip ready)
cargo run -p persona_loader

# 6) Author encounter budgets & hints with a tiny script
cargo run -p rhai_authoring

# 7) External AI (mock) makes a JSON plan
cargo run -p llm_toolcall

# 8) WebSocket: send a snapshot, get back a plan
cargo run -p ipc_loopback

# 9) See the plan & arena in a simple window
cargo run -p debug_overlay

# 10) Server-authoritative co-op (start server, then a client)
cargo run -p coop_server
cargo run -p coop_client
