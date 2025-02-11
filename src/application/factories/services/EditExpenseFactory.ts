import { makeHttpClientFinancePlusFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { EditExpenseService } from "@/services/EditExpense/EditExpenseService"

export const makeEditExpenseTypeFactory = () => {
  return new EditExpenseService(makeHttpClientFinancePlusFactory())
}
