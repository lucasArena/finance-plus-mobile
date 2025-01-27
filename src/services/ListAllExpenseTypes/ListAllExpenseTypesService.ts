import { IHttpClient } from "@/infra/HttpClient/Base/HttpClient.types"
import { ListAllExpenseTypesServiceNamespace } from "@/services/ListAllExpenseTypes/ListAllExpenseTypesService.types"

export class ListAllExpensesTypesService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    _: ListAllExpenseTypesServiceNamespace.TRequest,
  ): Promise<ListAllExpenseTypesServiceNamespace.IResponse> {
    return await this.httpClient.get<ListAllExpenseTypesServiceNamespace.IResponse>(
      "/configurations/expenses/types",
    )
  }
}
