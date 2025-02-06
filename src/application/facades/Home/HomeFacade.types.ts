import { IHttpClientService } from "@/infra/HttpClient/HttpClient.types"
import { ListUserExpensesServiceNamespace } from "@/services/ListUserExpenses/ListUserExpensesService.types"
import { ListUserExpensesGroupedServiceNamespace } from "@/services/ListUserExpensesGrouped/ListUserExpensesGroupedService.types"

export namespace HomeFacadeNamespace {
  export interface IRequest {
    month: number
    year: number
  }

  export interface IResponse {
    expenses: ListUserExpensesServiceNamespace.IResponse
    groupedExpenses: ListUserExpensesGroupedServiceNamespace.IResponse[]
  }
}

export interface IHomeFacade {
  getGroupedExpenses: IHttpClientService<
    ListUserExpensesGroupedServiceNamespace.IRequest,
    ListUserExpensesGroupedServiceNamespace.IResponse[]
  >
  getExpenses: IHttpClientService<
    ListUserExpensesServiceNamespace.IRequest,
    ListUserExpensesServiceNamespace.IResponse
  >
}
