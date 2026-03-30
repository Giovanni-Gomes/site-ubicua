/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_GIPHY: string
  readonly VITE_GIPHY_API_KEY: string
  readonly VITE_REACT_APP_MAPBOX_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
