import {
  IHttpClient,
  IHttpClientContructor,
} from "@/infra/HttpClient/HttpClient.types"

export abstract class HttpClientBase implements IHttpClient {
  protected baseUrl: string
  protected static token: string | null = null

  constructor(config: IHttpClientContructor) {
    this.baseUrl = config.baseUrl
  }

  static setToken(token: string) {
    HttpClientBase.token = token
  }

  abstract get<T>(url: string, params?: Record<string, unknown>): Promise<T>
  abstract post<T>(url: string, data?: unknown): Promise<T>
  abstract put<T>(url: string, data?: unknown): Promise<T>
  abstract delete<T>(url: string): Promise<T>
}
