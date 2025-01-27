import { makeHttpClientFinancePlusFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { ListAllExpensesTypesService } from "@/services/ListAllExpenseTypes/ListAllExpenseTypesService"

export const makeListAllExpenseTypesFactory = () => {
  return new ListAllExpensesTypesService(makeHttpClientFinancePlusFactory())
}
