import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { SendUserCodeForgetPasswordService } from "@/services/SendUserCodeForgetPassword/SendUserCodeForgetPasswordService"

export const makeSendUserCodeForgetPasswordFactory = () => {
  return new SendUserCodeForgetPasswordService(makeHttpClientBluefinFactory())
}
