import { makeListUserExpensesFactory } from "@/application/factories/services/ListUserExpensesFactory"
import { makeListUserExpensesGroupedFactory } from "@/application/factories/services/ListUserExpensesGroupedFactory"
import { HomeFacade } from "@/application/facades/Home/HomeFacade"

export const makeHomeFacadeFactory = () => {
  const getExpenses = makeListUserExpensesFactory()
  const getGroupedExpenses = makeListUserExpensesGroupedFactory()

  return new HomeFacade({ getExpenses, getGroupedExpenses })
}
