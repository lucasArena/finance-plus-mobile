import {
  IHttpClient,
  IHttpClientContructor,
} from "@/infra/HttpClient/Base/HttpClient.types"

export abstract class HttpClientBase implements IHttpClient {
  protected baseUrl: string

  constructor(config: IHttpClientContructor) {
    this.baseUrl = config.baseUrl
  }

  abstract get<T>(url: string, params?: Record<string, unknown>): Promise<T>
  abstract post<T>(url: string, data?: unknown): Promise<T>
  abstract put<T>(url: string, data?: unknown): Promise<T>
  abstract delete<T>(url: string): Promise<T>
}
