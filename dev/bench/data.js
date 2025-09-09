window.BENCHMARK_DATA = {
  "lastUpdate": 1757431781557,
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
          "id": "85fb4387946a72bdbe91321ca92260105da6fb16",
          "message": "Fix Optimized Rust Build with Advanced Caching workflow to properly build and run",
          "timestamp": "2025-09-09T15:12:16Z",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/pull/43/commits/85fb4387946a72bdbe91321ca92260105da6fb16"
        },
        "date": 1757431780736,
        "tool": "cargo",
        "benches": [
          {
            "name": "world_creation",
            "value": 56,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "entity_spawning",
            "value": 23471,
            "range": "± 114",
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
            "value": 104,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 665,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}