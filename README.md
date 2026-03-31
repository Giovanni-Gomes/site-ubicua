# Acme Cloud — demo (portfolio)

Single-page app de **marketing + portal administrativo** (React, TypeScript, Vite). Marca e textos são **fictícios** para exposição em portfólio.

## API e dados

Toda a camada HTTP em [`src/services/api.tsx`](src/services/api.tsx) usa um **adapter mock** ([`src/services/mockApi.ts`](src/services/mockApi.ts)): **não há chamadas a backend real** nem integração Giphy. Login, listagens e formulários respondem com dados estáticos/fictícios para a UI funcionar offline.

## Requisitos

- Node.js 18+
- npm (recomendado; o projeto usa `legacy-peer-deps` por causa de `react-leaflet@2` com React 18)

## Configuração

1. Opcional: copie `.env.example` para `.env.local` se for usar o mapa com Mapbox.
2. `VITE_REACT_APP_MAPBOX_TOKEN` — token público Mapbox para os tiles do mapa na home (sem token, o mapa pode falhar ao carregar tiles).

## Scripts

| Comando        | Descrição                          |
|----------------|-------------------------------------|
| `npm run dev`  | Servidor de desenvolvimento (Vite) |
| `npm run build`| `tsc` + build de produção          |
| `npm run preview` | Servir pasta `dist`             |
| `npm run lint` | ESLint em `src/`                   |
| `npm run test` | Vitest (uma vez)                   |

## Branding

Ajuste nome e chaves de `localStorage` em [`src/config/branding.ts`](src/config/branding.ts).

## Segurança

Se este repositório já chegou a conter chaves reais em commits antigos, **revogue-as** nos provedores e use apenas variáveis locais.
