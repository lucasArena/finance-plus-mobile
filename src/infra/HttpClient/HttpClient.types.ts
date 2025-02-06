export interface IHttpClient {
  get<T>(url: string, params?: Record<string, any>): Promise<T>
  post<T>(url: string, data?: unknown): Promise<T>
  put<T>(url: string, data?: unknown): Promise<T>
  delete<T>(url: string): Promise<T>
}

export interface IHttpClientContructor {
  baseUrl: string
}

export interface IHttpClientService<TRequest, TResponse> {
  handle: (request: TRequest) => Promise<TResponse>
}
