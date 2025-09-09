window.BENCHMARK_DATA = {
  "lastUpdate": 1757377400146,
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
          "id": "0602c28096435ff14da9b6e4bb3bc2be0da2f3be",
          "message": "Optimize Rust build workflow with advanced caching and performance improvements",
          "timestamp": "2025-09-08T23:18:48Z",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/pull/35/commits/0602c28096435ff14da9b6e4bb3bc2be0da2f3be"
        },
        "date": 1757377302357,
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
            "value": 23506,
            "range": "± 37",
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
            "value": 99,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 675,
            "range": "± 1",
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
          "id": "9d878f059bc3d6235f1bdd1ef556f36f3fbbe5f0",
          "message": "Add documentation badge to README",
          "timestamp": "2025-09-08T23:29:06Z",
          "url": "https://github.com/lazyxeon/AstraWeave-AI-Native-Gaming-Engine/pull/37/commits/9d878f059bc3d6235f1bdd1ef556f36f3fbbe5f0"
        },
        "date": 1757377398900,
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
            "value": 24197,
            "range": "± 207",
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
            "value": 67,
            "range": "± 2",
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
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}