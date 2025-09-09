#!/bin/bash
set -euo pipefail

RESULTS_DIR="test_benchmark_results"
JSON_FILE="$RESULTS_DIR/benchmarks.json"

mkdir -p "$RESULTS_DIR"

# Initialize JSON array
echo '[' > "$JSON_FILE"
FIRST_ENTRY=true

# Process criterion output to extract metrics
if [ -d "target/criterion" ]; then
  for benchmark_dir in target/criterion/*/; do
    if [ -f "$benchmark_dir/new/estimates.json" ]; then
      bench_name=$(basename "$benchmark_dir")
      mean_ns=$(jq -r '.mean.point_estimate' "$benchmark_dir/new/estimates.json")
      
      # Add to JSON
      if [ "$FIRST_ENTRY" != true ]; then
        echo ',' >> "$JSON_FILE"
      fi
      
      cat >> "$JSON_FILE" << JSON_ENTRY
{
  "name": "astraweave-core::${bench_name}",
  "unit": "ns",
  "value": ${mean_ns}
}
JSON_ENTRY
      FIRST_ENTRY=false
      
      echo "Processed: $bench_name -> $mean_ns ns"
    fi
  done
fi

# Close JSON array
echo ']' >> "$JSON_FILE"

echo "Generated benchmark JSON:"
cat "$JSON_FILE"
