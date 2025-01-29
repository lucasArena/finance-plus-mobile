import {
  IHttpClient,
  IHttpClientService,
} from "@/infra/HttpClient/HttpClient.types"
import { CreateExpenseServiceNamespace } from "@/services/CreateExpense/CreateExpenseService.types"

export class CreateExpenseService
  implements
    IHttpClientService<
      CreateExpenseServiceNamespace.IRequest,
      CreateExpenseServiceNamespace.TResponse
    >
{
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: CreateExpenseServiceNamespace.IRequest,
  ): Promise<CreateExpenseServiceNamespace.TResponse> {
    return await this.httpClient.post<CreateExpenseServiceNamespace.TResponse>(
      "/expenses",
      data,
    )
  }
}
