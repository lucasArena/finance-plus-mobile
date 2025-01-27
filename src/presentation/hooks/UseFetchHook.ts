import { useState } from "react"
import { IHttpClientService } from "@/infra/HttpClient/Base/HttpClient.types"

export const useFetchHook = <TRequest, TResponse>(
  httpClientService: IHttpClientService<TRequest, TResponse>,
) => {
  const [data, setData] = useState<TResponse | null>(null)
  const [isWaiting, setIsWaiting] = useState<boolean>(false)

  const handleFetch = async (request: TRequest) => {
    try {
      setIsWaiting(true)

      const response = await httpClientService.handle(request)

      setData(response)

      return response
    } catch (error) {
      console.log(error)
    } finally {
      setIsWaiting(false)
    }
  }

  return { data, isWaiting, handleFetch }
}
