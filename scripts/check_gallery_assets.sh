#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GALLERY_DIR="$ROOT_DIR/site/public/images/gallery"

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
  exit 1
fi

echo
echo "Galeria completa."
