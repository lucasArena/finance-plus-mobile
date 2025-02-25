import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { EditExpenseService } from "@/services/EditExpense/EditExpenseService"

export const makeEditExpenseTypeFactory = () => {
  return new EditExpenseService(makeHttpClientBluefinFactory())
}
