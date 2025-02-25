import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { SendUserCodeForgetPasswordServiceNamespace } from "@/services/SendUserCodeForgetPassword/SendUserCodeForgetPasswordService.types"

export class SendUserCodeForgetPasswordService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: SendUserCodeForgetPasswordServiceNamespace.IRequest,
  ): Promise<SendUserCodeForgetPasswordServiceNamespace.TResponse> {
    await this.httpClient.post<SendUserCodeForgetPasswordServiceNamespace.TResponse>(
      "/users/code/forget-password/send",
      data,
    )
  }
}
