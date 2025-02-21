import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { UserValidateActivationCodeServiceNamespace } from "@/services/UserValidateActivationCode/UserValidateActivationCodeService.types"

export class UserValidateActivationCodeService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: UserValidateActivationCodeServiceNamespace.IRequest,
  ): Promise<UserValidateActivationCodeServiceNamespace.TResponse> {
    await this.httpClient.post<UserValidateActivationCodeServiceNamespace.TResponse>(
      "/users/activationcode/validate",
      data,
    )
  }
}
