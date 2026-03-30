import axios from 'axios'

const giphyAPI = axios.create({
  headers: {
    api_key: import.meta.env.VITE_GIPHY_API_KEY ?? '',
  },
  baseURL: import.meta.env.VITE_API_GIPHY,
})

export default giphyAPI
