import { useState } from "react"

import { IHttpClientService } from "@/infra/HttpClient/HttpClient.types"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"
import {
  IPaginationRequest,
  IPaginationResponse,
} from "@/application/utils/types/pagination.types"

const defaultValues: IPaginationResponse<any> = {
  page: 1,
  pageSize: 1,
  total: 1,
  totalPages: 0,
  items: [],
}

const defaultRequest: IPaginationRequest = {
  page: 1,
  pageSize: 1,
}

export const useFetchPaginateHook = <
  T,
  TResponse extends IPaginationResponse<T>,
  TRequest extends IPaginationRequest,
>(
  httpClientService: IHttpClientService<TRequest, TResponse>,
) => {
  const [request, setRequest] = useState<TRequest>(defaultRequest as TRequest)
  const [dataPaginate, setDataPaginate] = useState<TResponse>(
    () => defaultValues as TResponse,
  )

  const fetchHook = useFetchHook(httpClientService)

  const handleFetchPaginate = async (fetchRequest: TRequest) => {
    const response = await fetchHook.handleFetch(fetchRequest)

    if (!response) {
      return
    }

    setRequest(fetchRequest)
    setDataPaginate(response)
  }

  const handleNextPage = async () => {
    const notAllowToPaginate =
      fetchHook.isWaiting || fetchHook.data?.totalPages === request.page

    if (notAllowToPaginate) {
      return
    }

    const nextPage = request.page + 1

    const response = await fetchHook.handleFetch({
      ...request,
      page: nextPage,
    })

    if (!response) {
      return
    }

    setRequest({
      ...request,
      page: nextPage,
    })

    setDataPaginate(state => ({
      ...state,
      page: nextPage,
      items: [...state.items, ...response.items],
    }))
  }

  return {
    data: dataPaginate,
    error: fetchHook.error,
    isWaiting: fetchHook.isWaiting,
    isSuccess: fetchHook.isSuccess,
    handleFetch: handleFetchPaginate,
    handleNextPage,
  }
}
