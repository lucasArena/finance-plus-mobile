import { AuthFacade } from "@/application/facades/Auth/AuthFacade"
import { makeUserSignInServiceFactory } from "@/application/factories/services/UserSignInServiceFactory"
import { makeUserSignUpServiceFactory } from "@/application/factories/services/UserSignUpServiceFactory"

export const makeAuthFacadeFactory = () => {
  const signIn = makeUserSignInServiceFactory()
  const signUp = makeUserSignUpServiceFactory()

  return new AuthFacade({ signIn, signUp })
}
