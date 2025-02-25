import { UserSignInService } from "@/services/UserSignIn/UserSignInService"
import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"

export const makeUserSignInServiceFactory = () => {
  return new UserSignInService(makeHttpClientBluefinFactory())
}
