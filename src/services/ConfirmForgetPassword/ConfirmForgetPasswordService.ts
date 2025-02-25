import {
  IHttpClient,
  IHttpClientService,
} from "@/infra/HttpClient/HttpClient.types"
import { ConfirmForgetPasswordServiceNamespace } from "@/services/ConfirmForgetPassword/ConfirmForgetPasswordService.types"

export class ConfirmForgetPasswordService
  implements
    IHttpClientService<
      ConfirmForgetPasswordServiceNamespace.IRequest,
      ConfirmForgetPasswordServiceNamespace.TResponse
    >
{
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: ConfirmForgetPasswordServiceNamespace.IRequest,
  ): Promise<ConfirmForgetPasswordServiceNamespace.TResponse> {
    return await this.httpClient.patch<ConfirmForgetPasswordServiceNamespace.TResponse>(
      "/users/password",
      data,
    )
  }
}
