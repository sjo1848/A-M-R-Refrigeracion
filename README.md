# A.M.R Refrigeracion

Landing de conversion para A.M.R Refrigeracion, enfocada en generar consultas calificadas por WhatsApp en Mendoza.

## Estado del proyecto

- Estado actual: `v1 local-ready`
- Implementacion: frontend estatico con Astro
- Entorno de trabajo: 100% contenedores (sin Node/NPM en host)

## Objetivo funcional

- Mostrar propuesta de valor clara en primer scroll
- Priorizar conversion por WhatsApp (CTA en puntos criticos)
- Reforzar confianza con servicios, diferenciales, zonas y testimonios
- Permitir iteracion rapida por contenido para mejoras v1.1

## Stack tecnico

- Astro 5
- Tailwind CSS 4
- TypeScript
- Docker Compose (desarrollo)
- Docker multi-stage + Nginx (staging)

## Requisitos

- Docker 24+ o equivalente compatible
- Docker Compose plugin
- Acceso al puerto `4321` (dev) y `8080` (staging)

## Inicio rapido

Desde la raiz del repo:

```bash
docker compose up --build
```

Abrir:

- `http://localhost:4321`

Detener:

```bash
docker compose down
```

## Comandos operativos

### Desarrollo

```bash
docker compose up --build
docker compose down
```

### Chequeo tecnico

```bash
docker run --rm -v "$PWD/site":/app -w /app node:20-alpine sh -lc "npm run check && npm run build"
```

### Staging local (Nginx)

```bash
docker compose -f compose.yaml -f compose.staging.yaml up --build -d web_staging
```

Abrir:

- `http://localhost:8080`

Apagar staging:

```bash
docker compose -f compose.yaml -f compose.staging.yaml down
```

### Preflight de release

```bash
./scripts/preflight_release.sh
```

Salida de evidencia:

- `docs/ejecucion/sprint-1/evidencia/preflight_*.log` (local)

## Variables de entorno

Archivo base:

- `site/.env.example`

Variable actual:

- `PUBLIC_SITE_URL`: URL canonica para SEO y sitemap

Ejemplo:

```env
PUBLIC_SITE_URL=https://tu-dominio.com
```

## Estructura del repositorio

```text
A-M-R_Refrigeracion/
├── compose.yaml
├── compose.staging.yaml
├── scripts/
│   └── preflight_release.sh
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
        ├── styles/
        └── utils/
```

## Arquitectura de contenido

- Fuente de contenido principal: `site/src/content/amr.ts`
- Tipado de contenido: `site/src/content/types.ts`
- Build de URL WhatsApp con origen de CTA: `site/src/utils/whatsapp.ts`
- SEO y schema local business: `site/src/utils/seo.ts`

## Conversion y medicion

Cada CTA de WhatsApp agrega origen de contacto para analisis comercial:

- `header`
- `hero`
- `servicios`
- `final`
- `flotante`

Esto permite medir que seccion empuja mas consultas sin backend.

## Solucion de problemas

### Error: `Cannot find module '@astrojs/sitemap'`

Causa probable:

- Volumen de `node_modules` desactualizado.

Solucion:

```bash
docker compose down -v
docker compose up --build
```

### Puerto ocupado

Si `4321` o `8080` estan en uso, deten los procesos previos o cambia mapeos en `compose.yaml`.

## Politica de documentacion

- La documentacion de operacion/estrategia se mantiene local.
- Este repositorio versiona solo el codigo y archivos tecnicos necesarios para ejecutar la landing.
