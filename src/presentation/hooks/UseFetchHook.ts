import { useState } from "react"
import { IHttpClientService } from "@/infra/HttpClient/HttpClient.types"

export const useFetchHook = <TRequest, TResponse>(
  httpClientService: IHttpClientService<TRequest, TResponse>,
) => {
  const [data, setData] = useState<TResponse | null>(null)
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const handleFetch = async (request: TRequest) => {
    setIsSuccess(false)

    try {
      setIsWaiting(true)

      const response = await httpClientService.handle(request)

      setData(response)
      setIsSuccess(true)

      return response
    } catch (error) {
      console.log(error)
    } finally {
      setIsWaiting(false)
    }
  }

  return { data, isSuccess, isWaiting, handleFetch }
}
