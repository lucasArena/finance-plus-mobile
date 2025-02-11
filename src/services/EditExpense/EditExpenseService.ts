import {
  IHttpClient,
  IHttpClientService,
} from "@/infra/HttpClient/HttpClient.types"
import { EditExpenseServiceNamespace } from "@/services/EditExpense/EditExpenseService.types"

export class EditExpenseService
  implements
    IHttpClientService<
      EditExpenseServiceNamespace.IRequest,
      EditExpenseServiceNamespace.TResponse
    >
{
  constructor(private readonly httpClient: IHttpClient) {}

  async handle({
    key,
    ...data
  }: EditExpenseServiceNamespace.IRequest): Promise<EditExpenseServiceNamespace.TResponse> {
    return await this.httpClient.put<EditExpenseServiceNamespace.TResponse>(
      `/expenses/${key}`,
      data,
    )
  }
}
