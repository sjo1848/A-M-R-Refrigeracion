#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
EVIDENCE_DIR="$ROOT_DIR/docs/ejecucion/sprint-1/evidencia"
STAMP="$(date +%Y%m%d_%H%M%S)"
LOG_FILE="$EVIDENCE_DIR/preflight_${STAMP}.log"
ALLOW_MISSING_GALLERY="${ALLOW_MISSING_GALLERY:-1}"

mkdir -p "$EVIDENCE_DIR"

{
  echo "== PRE-FLIGHT AMR-043 =="
  echo "fecha: $(date -Iseconds)"
  echo "root: $ROOT_DIR"
  echo "allow_missing_gallery: $ALLOW_MISSING_GALLERY"
  echo
  echo "== CHECK + BUILD EN CONTENEDOR =="
  docker run --rm -v "$ROOT_DIR/site":/app -w /app node:20-alpine sh -lc "npm run release:preflight"
  echo
  echo "== INTEGRIDAD DE DIST =="
  "$ROOT_DIR/scripts/check_dist_integrity.sh"
  echo
  echo "== ESTADO DE GALERIA =="
  if [[ "$ALLOW_MISSING_GALLERY" == "1" ]]; then
    "$ROOT_DIR/scripts/check_gallery_assets.sh" --allow-missing
  else
    "$ROOT_DIR/scripts/check_gallery_assets.sh"
  fi
  echo
  echo "== STAGING NGINX UP =="
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" up -d --build web_staging
  sleep 3
  echo
  echo "== HTTP HEAD STAGING / =="
  curl -I --max-time 15 http://localhost:8080
  echo
  echo "== HTTP HEAD STAGING /robots.txt =="
  curl -I --max-time 15 http://localhost:8080/robots.txt
  echo
  echo "== HTTP HEAD STAGING /sitemap-index.xml =="
  curl -I --max-time 15 http://localhost:8080/sitemap-index.xml
  echo
  echo "== STAGING DOWN =="
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" down
  echo
  echo "resultado: OK"
} | tee "$LOG_FILE"

echo "Evidencia registrada: $LOG_FILE"
