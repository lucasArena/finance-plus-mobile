import { makeHttpClientFinancePlusFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { CreateExpenseService } from "@/services/CreateExpense/CreateExpenseService"

export const makeCreateExpenseFactory = () => {
  return new CreateExpenseService(makeHttpClientFinancePlusFactory())
}
