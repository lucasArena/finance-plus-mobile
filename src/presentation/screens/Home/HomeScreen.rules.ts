import { useEffect, useState } from "react"

import { listUserExpensesAdapter } from "@/application/adapters/ListUserExpensesAdapter"
import { useHomeFacadeHook } from "@/presentation/hooks/UseHomeFacadeHook"

const EXPENSES_LIMIT = 5
const currentDate = new Date()

export const useHomeScreenRules = () => {
  const [date, setDate] = useState<Date>(currentDate)

  const homeFacadeHook = useHomeFacadeHook()

  const safeExpenses = listUserExpensesAdapter(
    homeFacadeHook.data?.expenses.items || [],
  )
  const safeExpensesGrouped =
    homeFacadeHook.data?.groupedExpenses.map(groupedExpense => ({
      value: groupedExpense.total,
      label: groupedExpense.name,
    })) || []

  const safeTotalExpenses = homeFacadeHook.data?.expenses.total ?? 0

  const isShowMoreExpensesButtonVisable = safeTotalExpenses > EXPENSES_LIMIT

  const handleChangeDate = (selectedDate: Date) => {
    const safeYear = selectedDate.getFullYear()
    const safeMonth = selectedDate.getMonth() + 1

    homeFacadeHook.handleFetch({
      month: safeMonth,
      year: safeYear,
    })

    setDate(new Date(selectedDate))
  }

  useEffect(() => {
    handleChangeDate(date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    date,
    isShowMoreExpensesButtonVisable,
    expenses: safeExpenses,
    expensesGrouped: safeExpensesGrouped,
    handleChangeDate,
  }
}
