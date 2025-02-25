import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { CreateExpenseTypeService } from "@/services/CreateExpenseType/CreateExpenseTypeService"

export const makeCreateExpenseTypeFactory = () => {
  return new CreateExpenseTypeService(makeHttpClientBluefinFactory())
}
