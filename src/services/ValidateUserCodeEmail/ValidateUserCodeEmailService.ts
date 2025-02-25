import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { ValidateUserCodeEmailServiceNamespace } from "@/services/ValidateUserCodeEmail/ValidateUserCodeEmailService.types"

export class ValidateUserCodeEmailService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: ValidateUserCodeEmailServiceNamespace.IRequest,
  ): Promise<ValidateUserCodeEmailServiceNamespace.TResponse> {
    await this.httpClient.post<ValidateUserCodeEmailServiceNamespace.TResponse>(
      "/users/code/email/validate",
      data,
    )
  }
}
