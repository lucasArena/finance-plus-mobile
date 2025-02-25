import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { ConfirmForgetPasswordService } from "@/services/ConfirmForgetPassword/ConfirmForgetPasswordService"

export const makeConfirmForgetPasswordFactory = () => {
  return new ConfirmForgetPasswordService(makeHttpClientBluefinFactory())
}
