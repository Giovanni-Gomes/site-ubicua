# Acme Cloud — demo (portfolio)

Single-page app de **marketing + portal administrativo** (React, TypeScript, Vite). Marca e textos são **fictícios** para exposição em portfólio.

## Requisitos

- Node.js 18+
- npm (recomendado; o projeto usa `legacy-peer-deps` por causa de `react-leaflet@2` com React 18)

## Configuração

1. Copie `.env.example` para `.env.local`.
2. Preencha pelo menos:
   - `VITE_API_URL` — URL base da sua API (ou deixe o placeholder para UI offline).
   - `VITE_GIPHY_API_KEY` — chave pública Giphy, se usar integração de GIFs.
   - `VITE_REACT_APP_MAPBOX_TOKEN` — token público Mapbox, se usar o mapa.

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

Se este repositório já chegou a conter chaves reais (Giphy, Mapbox, etc.), **revogue-as** nos painéis dos provedores e use apenas variáveis de ambiente locais.
