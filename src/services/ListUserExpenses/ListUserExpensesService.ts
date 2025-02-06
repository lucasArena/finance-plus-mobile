import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { ListUserExpensesServiceNamespace } from "@/services/ListUserExpenses/ListUserExpensesService.types"

export class ListUserExpensesService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    params: ListUserExpensesServiceNamespace.IRequest,
  ): Promise<ListUserExpensesServiceNamespace.IResponse> {
    return await this.httpClient.get<ListUserExpensesServiceNamespace.IResponse>(
      "/users/expenses",
      params,
    )
  }
}
