#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
EVIDENCE_DIR="$ROOT_DIR/docs/ejecucion/sprint-1/evidencia"
STAMP="$(date +%Y%m%d_%H%M%S)"
LOG_FILE="$EVIDENCE_DIR/preflight_${STAMP}.log"

mkdir -p "$EVIDENCE_DIR"

{
  echo "== PRELIGHT AMR-043 =="
  echo "fecha: $(date -Iseconds)"
  echo "root: $ROOT_DIR"
  echo
  echo "== CHECK + BUILD EN CONTENEDOR =="
  docker run --rm -v "$ROOT_DIR/site":/app -w /app node:20-alpine sh -lc "npm run release:preflight"
  echo
  echo "== STAGING NGINX UP =="
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" up -d --build web_staging
  sleep 3
  echo
  echo "== HTTP HEAD STAGING =="
  curl -I --max-time 15 http://localhost:8080
  echo
  echo "== STAGING DOWN =="
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" down
  echo
  echo "resultado: OK"
} | tee "$LOG_FILE"

echo "Evidencia registrada: $LOG_FILE"
