import { makeHttpClientFinancePlusFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { UserSignUpService } from "@/services/UserSignUp/UserSignUpService"

export const makeUserSignUpServiceFactory = () => {
  return new UserSignUpService(makeHttpClientFinancePlusFactory())
}
