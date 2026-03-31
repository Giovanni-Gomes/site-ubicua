import axios, { type AxiosAdapter, type InternalAxiosRequestConfig } from 'axios'
import { resolveMockResponse } from './mockApi'

/** Portfolio demo: all HTTP traffic is mocked locally (no real backend). */
const mockAdapter: AxiosAdapter = (config: InternalAxiosRequestConfig) => {
  return Promise.resolve(resolveMockResponse(config))
}

const api = axios.create({
  baseURL: '',
  adapter: mockAdapter,
})

export default api
