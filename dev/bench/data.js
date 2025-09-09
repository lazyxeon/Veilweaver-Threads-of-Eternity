window.BENCHMARK_DATA = {
  "lastUpdate": 1757377120763,
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
          "id": "3deb13f85940f713959c5df67f4e1b30aab576e9",
          "message": "Optimize Rust build workflow with advanced caching and performance improvements",
          "timestamp": "2025-09-08T23:18:48Z",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/pull/35/commits/3deb13f85940f713959c5df67f4e1b30aab576e9"
        },
        "date": 1757377120236,
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
            "value": 23828,
            "range": "± 67",
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
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 103,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 669,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}