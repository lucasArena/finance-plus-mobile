import { makeHttpClientBluefinFactory } from "@/application/factories/infra/HttpClient/HttpClientFinancePlusFactory"
import { ListAllExpensesCategoriesService } from "@/services/ListAllExpenseCategories/ListAllExpenseCategoriesService"

export const makeListAllExpenseCategoriesFactory = () => {
  return new ListAllExpensesCategoriesService(makeHttpClientBluefinFactory())
}
