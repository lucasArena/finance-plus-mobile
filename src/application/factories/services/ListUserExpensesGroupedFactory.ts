import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { ListUserExpensesGroupedService } from "@/services/ListUserExpensesGrouped/ListUserExpensesGroupedService"

export const makeListUserExpensesGroupedFactory = () => {
  return new ListUserExpensesGroupedService(makeHttpClientBluefinFactory())
}
