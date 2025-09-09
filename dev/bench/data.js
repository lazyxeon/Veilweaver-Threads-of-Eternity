window.BENCHMARK_DATA = {
  "lastUpdate": 1757435000823,
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
          "id": "0def94ff67c8d7c3ef6a31921e4d0ee328c3ea5c",
          "message": "Fix Rust toolchain management workflow for proper build and run functionality (#41)\n\n* Initial plan\n\n* Initial analysis of Rust toolchain management issues\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Fix clippy warnings and align Rust versions across configuration files\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Complete Rust toolchain management workflow optimization with comprehensive validation\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>",
          "timestamp": "2025-09-09T11:37:13-04:00",
          "tree_id": "32ceedacb48cfb8e6bfb458827abd47ae4f056e5",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/commit/0def94ff67c8d7c3ef6a31921e4d0ee328c3ea5c"
        },
        "date": 1757434999446,
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
            "value": 23070,
            "range": "± 154",
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
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 663,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}