#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GALLERY_DIR="$ROOT_DIR/site/src/assets/gallery"
ALLOW_MISSING=0

if [[ "${1:-}" == "--allow-missing" ]]; then
  ALLOW_MISSING=1
fi

required=(
  "amr-01.jpg"
  "amr-02.jpg"
  "amr-03.jpg"
  "amr-04.jpg"
)

missing=0

echo "Directorio de galeria: $GALLERY_DIR"
for file in "${required[@]}"; do
  if [[ -f "$GALLERY_DIR/$file" ]]; then
    echo "OK   $file"
  else
    echo "MISS $file"
    missing=1
  fi
done

if [[ "$missing" -eq 1 ]]; then
  echo
  echo "Faltan fotos reales. El sitio usa fallback automatico a placeholder."
  if [[ "$ALLOW_MISSING" -eq 1 ]]; then
    echo "Modo allow-missing activo: no se bloquea el flujo."
    exit 0
  fi
  exit 1
fi

echo
echo "Galeria completa."
