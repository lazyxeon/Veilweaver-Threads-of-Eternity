window.BENCHMARK_DATA = {
  "lastUpdate": 1757433845780,
  "repoUrl": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "name": "lazyxeon",
            "username": "lazyxeon"
          },
          "committer": {
            "name": "lazyxeon",
            "username": "lazyxeon"
          },
          "id": "fc8375a08541e46a08829c98aafdfce0914ea073",
          "message": "[WIP] please analyze my repo and revise all files that need revision in order for my Optimized Rust Build with Advanced Caching workflow to properly build and run, align all revisions with best practices and develop bespoke solutions.",
          "timestamp": "2025-09-09T14:10:57Z",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/pull/43/commits/fc8375a08541e46a08829c98aafdfce0914ea073"
        },
        "date": 1757432964137,
        "tool": "cargo",
        "benches": [
          {
            "name": "world_creation",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "entity_spawning",
            "value": 23521,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "world_tick",
            "value": 54,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_creation",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_serialization",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 668,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bd474ec2e0255443933b907ea71063a7cda4d85",
          "message": "Fix compilation issues and remove CI exclusions - enable comprehensive workspace builds (#44)\n\n* Initial plan\n\n* Fix compilation issues in problematic crates and format code\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Update CI workflow to remove exclusions - all crates now compile successfully\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Final formatting fix for combat_physics module\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Update astraweave-gameplay/src/combat_physics.rs\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update examples/cutscene_render_demo/src/main.rs\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-09-09T11:12:12-04:00",
          "tree_id": "192a17739e6c4a9c824691d3fe2b548b89227639",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/commit/5bd474ec2e0255443933b907ea71063a7cda4d85"
        },
        "date": 1757433043374,
        "tool": "cargo",
        "benches": [
          {
            "name": "world_creation",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "entity_spawning",
            "value": 23315,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "world_tick",
            "value": 54,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_creation",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_serialization",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 672,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9dee117254f15b6375e55c0f490080e3f2e6661",
          "message": "Fix Optimized Rust Build with Advanced Caching workflow to properly build and run (#43)\n\n* Initial plan\n\n* Fix all code formatting, clippy warnings, and workflow configuration issues\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Optimize benchmark execution to include all available benchmark targets\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>",
          "timestamp": "2025-09-09T11:13:10-04:00",
          "tree_id": "405a6ede32abb4c3d1ac3ad012aff15fab61d672",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/commit/c9dee117254f15b6375e55c0f490080e3f2e6661"
        },
        "date": 1757433428165,
        "tool": "cargo",
        "benches": [
          {
            "name": "world_creation",
            "value": 56,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "entity_spawning",
            "value": 23484,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "world_tick",
            "value": 54,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_creation",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_serialization",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 669,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abe95b89fd0fb0b16d61e231fa10550b8a3be7fe",
          "message": "Complete dependency management & cache optimization overhaul for AstraWeave (#42)\n\n* Initial plan\n\n* Fix Rust toolchain version consistency and optimize .cargo/config.toml\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Complete dependency management & cache optimization overhaul\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Update .github/workflows/rust-cache-optimized.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .github/workflows/dependency-management.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .cargo/config.toml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .cargo/config.toml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-09-09T11:26:12-04:00",
          "tree_id": "4bc2749d5490a44371b09b0f1d921ac3fdbfc701",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/commit/abe95b89fd0fb0b16d61e231fa10550b8a3be7fe"
        },
        "date": 1757433845310,
        "tool": "cargo",
        "benches": [
          {
            "name": "world_creation",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "entity_spawning",
            "value": 23127,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "world_tick",
            "value": 49,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_creation",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_serialization",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 660,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}