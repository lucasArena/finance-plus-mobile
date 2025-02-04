import { IHttpClientService } from "@/infra/HttpClient/HttpClient.types"
import { UserSignInServiceNamespace } from "@/services/UserSignIn/UserSignInService.types"
import { UserSignUpServiceNamespace } from "@/services/UserSignUp/UserSignUpService.types"

export namespace AuthFacadeNamespace {
  export interface IRequest {
    name: string
    email: string
    password: string
  }

  export interface IResponse {
    token: string
  }
}

export interface IAuthFacade {
  signUp: IHttpClientService<
    UserSignUpServiceNamespace.IRequest,
    UserSignUpServiceNamespace.TResponse
  >
  signIn: IHttpClientService<
    UserSignInServiceNamespace.IRequest,
    UserSignInServiceNamespace.IResponse
  >
}
