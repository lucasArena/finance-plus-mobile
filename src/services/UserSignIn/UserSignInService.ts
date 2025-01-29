import {
  IHttpClient,
  IHttpClientService,
} from "@/infra/HttpClient/HttpClient.types"
import { UserSignInServiceNamespace } from "@/services/UserSignIn/UserSignInService.types"

export class UserSignInService
  implements
    IHttpClientService<
      UserSignInServiceNamespace.IRequest,
      UserSignInServiceNamespace.IResponse
    >
{
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: UserSignInServiceNamespace.IRequest,
  ): Promise<UserSignInServiceNamespace.IResponse> {
    return await this.httpClient.post<UserSignInServiceNamespace.IResponse>(
      "/users/sign-in",
      data,
    )
  }
}
