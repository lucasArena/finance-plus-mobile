import { makeHttpClientFinancePlusFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { UserValidateActivationCodeService } from "@/services/UserValidateActivationCode/UserValidateActivationCodeService"

export const makeUserValidateActivationCodeFactory = () => {
  return new UserValidateActivationCodeService(
    makeHttpClientFinancePlusFactory(),
  )
}
