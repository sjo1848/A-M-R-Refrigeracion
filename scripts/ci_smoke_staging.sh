#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BASE_URL="${1:-http://localhost:8080}"

cleanup() {
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" down >/dev/null 2>&1 || true
}
trap cleanup EXIT

docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" up -d --build web_staging
sleep 3
"$ROOT_DIR/scripts/smoke_http_check.sh" "$BASE_URL"
