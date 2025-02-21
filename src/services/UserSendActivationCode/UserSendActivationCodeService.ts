import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { UserSendActivationCodeServiceNamespace } from "@/services/UserSendActivationCode/UserSendActivationCodeService.types"

export class UserSendActivationCodeService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: UserSendActivationCodeServiceNamespace.IRequest,
  ): Promise<UserSendActivationCodeServiceNamespace.TResponse> {
    await this.httpClient.post<UserSendActivationCodeServiceNamespace.TResponse>(
      "/users/activationcode/send",
      data,
    )
  }
}
