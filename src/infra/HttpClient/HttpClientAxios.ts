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

    this.axiosInstance.interceptors.request.use(requestConfig => {
      if (HttpClientBase.token) {
        requestConfig.headers.Authorization = `Bearer ${HttpClientBase.token}`
      }
      return requestConfig
    })

    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        console.log(error)

        const message =
          error.response?.data?.message ||
          "Unfortunately something went wrong. Try again later."

        return Promise.reject({ message })
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

  async patch<T>(url: string, data?: unknown): Promise<T> {
    const response = await this.axiosInstance.patch<T>(url, data)
    return response.data
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url)
    return response.data
  }
}
