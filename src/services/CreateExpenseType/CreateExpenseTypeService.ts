import { IHttpClient } from "@/infra/HttpClient/Base/HttpClient.types"
import { CreateExpenseTypeServiceNamespace } from "@/services/CreateExpenseType/CreateExpenseTypeService.types"

export class CreateExpenseTypeService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: CreateExpenseTypeServiceNamespace.IRequest,
  ): Promise<CreateExpenseTypeServiceNamespace.TResponse> {
    return await this.httpClient.post<CreateExpenseTypeServiceNamespace.TResponse>(
      "/configurations/expenses/types",
      data,
    )
  }
}
