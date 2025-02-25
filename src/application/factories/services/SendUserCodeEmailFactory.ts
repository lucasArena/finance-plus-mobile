import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { UserSendActivationCodeService } from "@/services/SendUserCodeEmail/SendUserCodeEmailService"

export const makeSendUserCodeEmailFactory = () => {
  return new UserSendActivationCodeService(makeHttpClientBluefinFactory())
}
