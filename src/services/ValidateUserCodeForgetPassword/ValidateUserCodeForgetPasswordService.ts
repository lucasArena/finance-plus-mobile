import { IHttpClient } from "@/infra/HttpClient/HttpClient.types"
import { ValidateUserCodeForgetPasswordServiceNamespace } from "@/services/ValidateUserCodeForgetPassword/ValidateUserCodeForgetPasswordService.types"

export class ValidateUserCodeForgetPasswordService {
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: ValidateUserCodeForgetPasswordServiceNamespace.IRequest,
  ): Promise<ValidateUserCodeForgetPasswordServiceNamespace.TResponse> {
    await this.httpClient.post<ValidateUserCodeForgetPasswordServiceNamespace.TResponse>(
      "/users/code/forget-password/validate",
      data,
    )
  }
}
