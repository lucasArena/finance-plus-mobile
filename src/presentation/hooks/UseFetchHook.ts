import { useState } from "react"
import { IHttpClientService } from "@/infra/HttpClient/HttpClient.types"

export const useFetchHook = <TRequest, TResponse>(
  httpClientService: IHttpClientService<TRequest, TResponse>,
) => {
  const [data, setData] = useState<TResponse | null>(null)
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleFetch = async (request: TRequest) => {
    setIsSuccess(false)

    try {
      setIsWaiting(true)

      const response = await httpClientService.handle(request)

      setData(response)
      setIsSuccess(true)

      return response
      // eslint-disable-next-line no-catch-shadow, @typescript-eslint/no-shadow
    } catch (error) {
      const safeError = error as Error

      setError(safeError.message)
    } finally {
      setIsWaiting(false)
    }
  }

  const handleResetState = () => {
    setIsWaiting(false)
    setIsSuccess(false)
    setError(null)
    setData(null)
  }

  return { data, isSuccess, isWaiting, error, handleFetch, handleResetState }
}
