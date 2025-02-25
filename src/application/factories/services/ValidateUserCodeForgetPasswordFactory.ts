import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { ValidateUserCodeForgetPasswordService } from "@/services/ValidateUserCodeForgetPassword/ValidateUserCodeForgetPasswordService"

export const makeValidateUserCodeForgetPasswordFactory = () => {
  return new ValidateUserCodeForgetPasswordService(
    makeHttpClientBluefinFactory(),
  )
}
