import {
  AuthFacadeNamespace,
  IAuthFacade,
} from "@/application/facades/Auth/AuthFacade.types"

export class AuthFacade {
  private readonly signIn: IAuthFacade["signIn"]
  private readonly signUp: IAuthFacade["signUp"]

  constructor(contructor: IAuthFacade) {
    this.signIn = contructor.signIn
    this.signUp = contructor.signUp
  }

  handle = async (
    request: AuthFacadeNamespace.IRequest,
  ): Promise<AuthFacadeNamespace.IResponse> => {
    await this.signUp.handle({
      name: request.name,
      email: request.email,
      password: request.password,
    })

    return await this.signIn.handle({
      email: request.email,
      password: request.password,
    })
  }
}
