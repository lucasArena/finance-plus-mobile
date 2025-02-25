import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { ListUserExpensesService } from "@/services/ListUserExpenses/ListUserExpensesService"

export const makeListUserExpensesFactory = () => {
  return new ListUserExpensesService(makeHttpClientBluefinFactory())
}
