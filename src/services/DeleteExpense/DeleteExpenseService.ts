import {
  IHttpClient,
  IHttpClientService,
} from "@/infra/HttpClient/HttpClient.types"
import { DeleteExpenseServiceNamespace } from "@/services/DeleteExpense/DeleteExpenseService.types"

export class DeleteExpenseService
  implements
    IHttpClientService<
      DeleteExpenseServiceNamespace.TRequest,
      DeleteExpenseServiceNamespace.TResponse
    >
{
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    key: DeleteExpenseServiceNamespace.TRequest,
  ): Promise<DeleteExpenseServiceNamespace.TResponse> {
    return await this.httpClient.delete<DeleteExpenseServiceNamespace.TResponse>(
      `/expenses/${key}`,
    )
  }
}
