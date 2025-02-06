import { useEffect, useState } from "react"

import { useListUserExpensesHook } from "@/presentation/hooks/UseListUserExpensesHook"
import { useRoutes } from "@/presentation/routes"
import { listUserExpensesAdapter } from "@/application/adapters/ListUserExpensesAdapter"

export const useListExpensesByDateRules = () => {
  const navigation = useRoutes()
  const routeParams = navigation.getRouteParams("ListExpensesByDate")

  const [date, setDate] = useState<Date>(routeParams?.initialDate ?? new Date())

  const listExpensesByDate = useListUserExpensesHook()

  const handleChangeDate = (changedDate: Date) => {
    const safeYear = changedDate.getFullYear()
    const safeMonth = changedDate.getMonth() + 1

    setDate(new Date(changedDate))

    listExpensesByDate.handleFetch({
      page: 1,
      pageSize: 10,
      year: safeYear,
      month: safeMonth,
    })
  }

  useEffect(() => {
    handleChangeDate(date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    sections: listUserExpensesAdapter(listExpensesByDate.data.items),
    date,
    isWaiting: listExpensesByDate.isWaiting,
    error: listExpensesByDate.error,
    handleChangeDate,
    handleNextPage: listExpensesByDate.handleNextPage,
  }
}
