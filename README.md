# A-M-R_Refrigeracion

Implementacion frontend en Astro con ejecucion 100% en contenedores.

## Stack

- Astro 5 (Static Site Generation)
- Tailwind CSS 4
- TypeScript
- Dual Theme (Light/Dark Mode nativo)
- SEO Local Dinámico (Rutas por zona/servicio)
- Docker Compose
- Nginx (staging)

## Requisitos

- Docker
- Docker Compose plugin
- Puertos `4321` (dev) y `8080` (staging) disponibles

## Estructura

```text
A-M-R_Refrigeracion/
├── compose.yaml
├── compose.staging.yaml
├── scripts/
│   ├── preflight_release.sh
│   ├── check_dist_integrity.sh
│   ├── check_gallery_assets.sh
│   ├── smoke_http_check.sh
│   └── ci_smoke_staging.sh
            ├── faq.astro (Acordeón SEO)
│           ├── footer.astro
│           ├── gallery.astro (Lightbox nativo)
│           └── ... (otros componentes)
└── site/
    ├── Dockerfile
    ├── astro.config.mjs
    ├── package.json
    ├── public/
    └── src/
        ├── components/
        ├── content/
        ├── layouts/
        ├── pages/
        │   ├── 404.astro (Error personalizado)
        │   ├── index.astro
        │   └── servicios/
        │       └── [slug].astro (Páginas dinámicas)
        ├── styles/
        │   └── global.css (Variables Dual Theme)
        └── utils/
            ├── seo.ts (Schema JSON-LD)
            └── whatsapp.ts
```

## Desarrollo local (NUEVO: via Makefile)

Se ha incorporado un `Makefile` para facilitar los comandos. Desde la raiz del repo:

```bash
make dev
```

URL:

- `http://localhost:4321`

Detener:

```bash
make down
```

Alternativa con Docker Compose directo:

```bash
docker compose up --build
```
URL: `http://localhost:4321` | Detener: `docker compose down`

## Validacion tecnica

```bash
docker run --rm -v "$PWD/site":/app -w /app node:20-alpine sh -lc "npm run check && npm run build"
```

## Staging local

```bash
docker compose -f compose.yaml -f compose.staging.yaml up --build -d web_staging
```

URL:

- `http://localhost:8080`

Detener:

```bash
docker compose -f compose.yaml -f compose.staging.yaml down
```

## Preflight de release

```bash
./scripts/preflight_release.sh
```

Modo estricto de galeria (falla si faltan fotos reales):

```bash
ALLOW_MISSING_GALLERY=0 ./scripts/preflight_release.sh
```

Incluye smoke HTTP automatico contra staging local (`http://localhost:8080`).

## Galeria de fotos reales

Ubicacion esperada:

- `site/public/images/gallery/amr-01.jpg`
- `site/public/images/gallery/amr-02.jpg`
- `site/public/images/gallery/amr-03.jpg`
- `site/public/images/gallery/amr-04.jpg`

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

  - `./scripts/check_gallery_assets.sh --allow-missing`
  - `./scripts/ci_smoke_staging.sh`

## DevX y Herramientas Locales

Se recomienda correr el `Makefile` (`make check`) localmente antes de hacer push para asegurar que la compilación de Astro y las integraciones sean correctas y que no existan errores de tipado o de componentes no utilizados, mejorando así la calidad del código mediante comprobaciones pre-commit rápidas.

## Variables de entorno

Archivo base:

- `site/.env.example`

Variable:

- `PUBLIC_SITE_URL`

Ejemplo:

```env
PUBLIC_SITE_URL=https://tu-dominio.com
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
