window.BENCHMARK_DATA = {
  "lastUpdate": 1757376473852,
  "repoUrl": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine",
  "entries": {
    "Rust Benchmark": [
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
          "id": "4f1055351b603612493eb84ee336dbb39391f706",
          "message": "Fix Rust toolchain workflow with comprehensive CI improvements and problematic crate exclusions (#33)\n\n* Initial plan\n\n* Comprehensive Rust toolchain workflow improvements\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Final toolchain workflow fixes: exclude physics_demo3d from problematic crates\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Update .github/workflows/toolchain-management.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .github/workflows/toolchain-management.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .github/workflows/ci.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .github/workflows/ci.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .github/workflows/ci.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* Update .github/workflows/ci.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-09-08T19:18:43-04:00",
          "tree_id": "5ebe11d13f0e25384eba0fda06e9946a5f88e587",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/commit/4f1055351b603612493eb84ee336dbb39391f706"
        },
        "date": 1757375701658,
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
            "value": 23541,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "world_tick",
            "value": 54,
            "range": "± 1",
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
            "value": 65,
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
            "value": 660,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "5da774ed01a33a2c6280a04ebe995068780c45cd",
          "message": "Optimize Rust build workflow with advanced caching and performance improvements",
          "timestamp": "2025-09-08T23:18:48Z",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/pull/35/commits/5da774ed01a33a2c6280a04ebe995068780c45cd"
        },
        "date": 1757376302087,
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
            "value": 23611,
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
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 99,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 670,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "b0f9747ea16aba5cc4926105cd679dbf6ac3b47f",
          "message": "Optimize Rust build workflow with advanced caching and performance improvements",
          "timestamp": "2025-09-08T23:18:48Z",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/pull/35/commits/b0f9747ea16aba5cc4926105cd679dbf6ac3b47f"
        },
        "date": 1757376472729,
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
            "value": 23432,
            "range": "± 119",
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
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 102,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 671,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}