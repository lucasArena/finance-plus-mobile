import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { DeleteExpenseService } from "@/services/DeleteExpense/DeleteExpenseService"

export const makeDeleteExpenseTypeFactory = () => {
  return new DeleteExpenseService(makeHttpClientBluefinFactory())
}
