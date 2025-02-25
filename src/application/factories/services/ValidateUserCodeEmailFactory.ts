import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { ValidateUserCodeEmailService } from "@/services/ValidateUserCodeEmail/ValidateUserCodeEmailService"

export const makeValidateUserCodeEmailFactory = () => {
  return new ValidateUserCodeEmailService(makeHttpClientBluefinFactory())
}
