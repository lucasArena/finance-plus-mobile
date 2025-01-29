import axios, { AxiosInstance } from "axios"
import { HttpClientBase } from "@/infra/HttpClient/HttpClient"
import { IHttpClientContructor } from "@/infra/HttpClient/HttpClient.types"

export class HttpClientAxios extends HttpClientBase {
  private axiosInstance: AxiosInstance

  constructor(config: IHttpClientContructor) {
    super(config)

    this.axiosInstance = axios.create({
      baseURL: config.baseUrl,
      timeout: 5000,
    })

    // Add interceptors if needed
    this.axiosInstance.interceptors.request.use(requestConfig => {
      // Add headers, auth tokens, etc.
      return requestConfig
    })

    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        // Handle errors globally
        return Promise.reject(error)
      },
    )
  }

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, { params })
    return response.data
  }

  async post<T>(url: string, data?: unknown): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data)
    return response.data
  }

  async put<T>(url: string, data?: unknown): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data)
    return response.data
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url)
    return response.data
  }
}
