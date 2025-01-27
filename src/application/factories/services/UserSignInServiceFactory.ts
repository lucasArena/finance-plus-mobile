import { UserSignInService } from "@/services/UserSignIn/UserSignInService"
import { makeHttpClientFinancePlusFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"

export const makeUserSignInServiceFactory = () => {
  return new UserSignInService(makeHttpClientFinancePlusFactory())
}
