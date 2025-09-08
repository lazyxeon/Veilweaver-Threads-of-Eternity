window.BENCHMARK_DATA = {
  "lastUpdate": 1757366774773,
  "repoUrl": "https://github.com/lazyxeon/Veilweaver-Threads-of-Eternity",
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
          "id": "4bd7c6fa7895eda14fcc66d566a2d4d56c0298a1",
          "message": "Fix failing benchmark workflow by handling missing gh-pages branch and improving error handling (#24)\n\n* Initial plan\n\n* Initial plan for fixing benchmark workflow\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n* Fix benchmark workflow by adding gh-pages initialization and better error handling\n\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: lazyxeon <79929721+lazyxeon@users.noreply.github.com>",
          "timestamp": "2025-09-08T17:14:06-04:00",
          "tree_id": "9bc83c9e886a9edf06e87c3866b41ccbb1cfdfff",
          "url": "https://github.com/lazyxeon/Veilweaver-Threads-of-Eternity/commit/4bd7c6fa7895eda14fcc66d566a2d4d56c0298a1"
        },
        "date": 1757366773517,
        "tool": "cargo",
        "benches": [
          {
            "name": "world_creation",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "entity_spawning",
            "value": 32027,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "world_tick",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_creation",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_serialization",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 129,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 674,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}