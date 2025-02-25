import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { SendUserCodeEmailServiceNamespace } from "@/services/SendUserCodeEmail/SendUserCodeEmailService.types"

export class UserSendActivationCodeService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: SendUserCodeEmailServiceNamespace.IRequest,
  ): Promise<SendUserCodeEmailServiceNamespace.TResponse> {
    await this.httpClient.post<SendUserCodeEmailServiceNamespace.TResponse>(
      "/users/code/email/send",
      data,
    )
  }
}
