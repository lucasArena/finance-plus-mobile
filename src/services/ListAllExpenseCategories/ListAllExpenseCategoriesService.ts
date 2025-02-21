import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { ListAllExpenseCategoriesServiceNamespace } from "@/services/ListAllExpenseCategories/ListAllExpenseTypesCategories.types"

export class ListAllExpensesCategoriesService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    _: ListAllExpenseCategoriesServiceNamespace.TRequest,
  ): Promise<ListAllExpenseCategoriesServiceNamespace.IResponse[]> {
    return await this.httpClient.get<
      ListAllExpenseCategoriesServiceNamespace.IResponse[]
    >("/configurations/expenses/categories")
  }
}
