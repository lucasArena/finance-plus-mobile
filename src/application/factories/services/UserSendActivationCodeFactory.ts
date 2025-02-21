import { makeHttpClientFinancePlusFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { UserSendActivationCodeService } from "@/services/UserSendActivationCode/UserSendActivationCodeService"

export const makeUserSendActivationCodeFactory = () => {
  return new UserSendActivationCodeService(makeHttpClientFinancePlusFactory())
}
