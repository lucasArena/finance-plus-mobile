import { IHttpClient } from "@/infra/HttpClient/Base/HttpClient.types"
import { ListUserExpensesServiceNamespace } from "@/services/ListUserExpenses/ListUserExpensesService.types"

export class ListUserExpensesService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    _: ListUserExpensesServiceNamespace.TRequest,
  ): Promise<ListUserExpensesServiceNamespace.IResponse> {
    return await this.httpClient.get<ListUserExpensesServiceNamespace.IResponse>(
      "/users/expenses",
    )
  }
}
