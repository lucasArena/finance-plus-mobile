import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { ListUserExpensesGroupedServiceNamespace } from "@/services/ListUserExpensesGrouped/ListUserExpensesGroupedService.types"

export class ListUserExpensesGroupedService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    params: ListUserExpensesGroupedServiceNamespace.IRequest,
  ): Promise<ListUserExpensesGroupedServiceNamespace.IResponse[]> {
    return await this.httpClient.get<
      ListUserExpensesGroupedServiceNamespace.IResponse[]
    >("/users/expenses-grouped", params)
  }
}
