import {
  IHttpClient,
  IHttpClientService,
} from "@/infra/HttpClient/HttpClient.types"
import { UserSignUpServiceNamespace } from "@/services/UserSignUp/UserSignUpService.types"

export class UserSignUpService
  implements
    IHttpClientService<
      UserSignUpServiceNamespace.IRequest,
      UserSignUpServiceNamespace.TResponse
    >
{
  constructor(private readonly httpClient: IHttpClient) {}

  async handle(
    data: UserSignUpServiceNamespace.IRequest,
  ): Promise<UserSignUpServiceNamespace.TResponse> {
    return await this.httpClient.post<UserSignUpServiceNamespace.TResponse>(
      "/users/sign-up",
      data,
    )
  }
}
