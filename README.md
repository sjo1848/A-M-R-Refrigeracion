# A-M-R_Refrigeracion

Implementacion frontend en Astro con ejecucion 100% en contenedores.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- Docker Compose
- Nginx (staging)

## Requisitos

- Docker
- Docker Compose plugin
- Puertos `4321` (dev) y `8080` (staging) disponibles

## Estructura

```text
A-M-R_Refrigeracion/
├── Makefile
├── compose.yaml
├── compose.staging.yaml
├── scripts/
│   ├── preflight_release.sh
│   ├── check_dist_integrity.sh
│   ├── check_gallery_assets.sh
│   ├── smoke_http_check.sh
│   └── ci_smoke_staging.sh
└── site/
    ├── Dockerfile
    ├── astro.config.mjs
    ├── package.json
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        ├── content/
        ├── layouts/
        ├── pages/
        ├── styles/
        └── utils/
```

## Desarrollo local

Desde la raiz del repo:

```bash
docker compose up --build
```

Alternativa equivalente:

```bash
make dev
```

URL:

- `http://localhost:4321`

Detener:

```bash
docker compose down
```

Alternativa equivalente:

```bash
make down
```

## Validacion tecnica

```bash
docker run --rm -v "$PWD/site":/app -w /app node:20-alpine sh -lc "npm run check && npm run build"
```

Alternativa equivalente:

```bash
make check
```

## Staging local

```bash
docker compose -f compose.yaml -f compose.staging.yaml up --build -d web_staging
```

Alternativa equivalente:

```bash
make staging
```

URL:

- `http://localhost:8080`

Detener:

```bash
docker compose -f compose.yaml -f compose.staging.yaml down
```

Alternativa equivalente:

```bash
make staging-down
```

## Preflight de release

```bash
./scripts/preflight_release.sh
```

Alternativa equivalente:

```bash
make preflight
```

Modo estricto de galeria (falla si faltan fotos reales):

```bash
ALLOW_MISSING_GALLERY=0 ./scripts/preflight_release.sh
```

Incluye smoke HTTP automatico contra staging local (`http://localhost:8080`).

## Galeria de fotos reales

Ubicacion esperada:

- `site/src/assets/gallery/amr-01.jpg`
- `site/src/assets/gallery/amr-02.jpg`
- `site/src/assets/gallery/amr-03.jpg`
- `site/src/assets/gallery/amr-04.jpg`

Chequeo rapido de faltantes:

```bash
./scripts/check_gallery_assets.sh
```

Si faltan archivos, la landing usa fallback a placeholder en tiempo de ejecucion.

## Integridad de build

Valida estructura y SEO tecnico del `dist`:

```bash
./scripts/check_dist_integrity.sh
```

## Smoke HTTP

Valida health de endpoints y estructura critica del HTML renderizado:

```bash
./scripts/smoke_http_check.sh http://localhost:8080
```

## CI

Workflow incluido:

- `.github/workflows/ci.yml`

Quality gate en cada push/PR:

- `npm ci && npm run check && npm run build` en contenedor `node:20-alpine`
- `./scripts/check_dist_integrity.sh`
- `./scripts/check_gallery_assets.sh --allow-missing`
- `./scripts/ci_smoke_staging.sh`

## Variables de entorno

Archivo base:

- `site/.env.example`

Variable:

- `PUBLIC_SITE_URL`
- `PUBLIC_INSTAGRAM_URL` (opcional)

Ejemplo:

```env
PUBLIC_SITE_URL=https://tu-dominio.com
PUBLIC_INSTAGRAM_URL=https://instagram.com/tu_cuenta
```

## Puntos tecnicos clave

- Configuracion Astro: `site/astro.config.mjs`
- Contenido principal: `site/src/content/amr.ts`
- Generacion de URL WhatsApp: `site/src/utils/whatsapp.ts`
- SEO y schema JSON-LD: `site/src/utils/seo.ts`
- Sitemap: `@astrojs/sitemap`
- Robots: `site/public/robots.txt`

## Troubleshooting

### Error `Cannot find module '@astrojs/sitemap'`

```bash
docker compose down -v
docker compose up --build
```

### Puerto ocupado

Ajustar puertos en `compose.yaml` / `compose.staging.yaml` o detener procesos que ya los usen.
