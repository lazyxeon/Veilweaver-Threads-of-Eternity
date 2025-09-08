window.BENCHMARK_DATA = {
  "lastUpdate": 1757367815295,
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
          "id": "5476d14e0cf260e45eb64def2f6b9defd598046c",
          "message": "Fix failing benchmark workflow by handling missing gh-pages branch and improving error handling",
          "timestamp": "2025-09-08T21:13:44Z",
          "url": "https://github.com/lazyxeon/Veilweaver-Threads-of-Eternity/pull/24/commits/5476d14e0cf260e45eb64def2f6b9defd598046c"
        },
        "date": 1757367141541,
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
            "value": 31559,
            "range": "± 1217",
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
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "binding_deserialization",
            "value": 134,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 691,
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
          "id": "053a52eb8600f00b1df0bfcb7bcddaafb0b897e6",
          "message": "[WIP] please analyze and develop a bespoke rust toolchain and rust cache workflows for my repo",
          "timestamp": "2025-09-08T21:14:11Z",
          "url": "https://github.com/lazyxeon/Veilweaver-Threads-of-Eternity/pull/29/commits/053a52eb8600f00b1df0bfcb7bcddaafb0b897e6"
        },
        "date": 1757367814666,
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
            "value": 31173,
            "range": "± 150",
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
            "value": 128,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "binding_set_creation",
            "value": 673,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}