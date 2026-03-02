#!/usr/bin/env bash
set -euo pipefail

NAME="midnight-grove"
echo "Hello $NAME"

if [[ -n "${CI:-}" ]]; then
  echo "Running in CI"
fi

for n in 1 2 3; do
  echo "n=$n"
done
