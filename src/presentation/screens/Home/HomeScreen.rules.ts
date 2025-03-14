import { useEffect, useRef, useState } from "react"

import { listUserExpensesAdapter } from "@/application/adapters/ListUserExpensesAdapter"
import { useHomeFacadeHook } from "@/presentation/hooks/UseHomeFacadeHook"
import { IBottomSheetComponentRef } from "@/presentation/components/BottomSheet/BottomSheetComponent.types"
import { IExpense } from "@/domain/Expense.types"
import { IExpenseSheetProps } from "@/presentation/sheets/Expense/ExpenseSheet.types"

const EXPENSES_LIMIT = 5
const currentDate = new Date()

export const useHomeScreenRules = () => {
  const [date, setDate] = useState<Date>(currentDate)
  const createNewExpenseRef =
    useRef<IBottomSheetComponentRef<IExpenseSheetProps>>(null)

  const homeFacadeHook = useHomeFacadeHook()

  const safeExpenses = listUserExpensesAdapter(
    homeFacadeHook.data?.expenses.items || [],
  )
  const safeExpensesGrouped =
    homeFacadeHook.data?.groupedExpenses.map(groupedExpense => ({
      value: groupedExpense.total,
      label: groupedExpense.name,
      color: groupedExpense.color,
    })) || []

  const safeTotalExpenses = homeFacadeHook.data?.expenses.total ?? 0

  const isShowMoreExpensesButtonVisable = safeTotalExpenses > EXPENSES_LIMIT

  const handleChangeDate = (selectedDate: Date) => {
    const safeYear = selectedDate.getFullYear()
    const safeMonth = selectedDate.getMonth() + 1

    homeFacadeHook.handleResetState()
    homeFacadeHook.handleFetch({
      month: safeMonth,
      year: safeYear,
    })

    setDate(new Date(selectedDate))
  }

  const handleOpenCreateNewExpenses = (expense?: IExpense) => {
    createNewExpenseRef.current?.open({
      onClose: handleCloseCreateNewExpenses,
      onSubmit: () => handleAfterCreateNewExpense(),
      ...(expense && {
        defaultValues: {
          key: expense.key,
          expenseTypeId: expense.type.key,
          description: expense.description,
          value: expense.value.toFixed(2).toString(),
          date: new Date(expense.date),
        },
      }),
    })
  }

  const handleCloseCreateNewExpenses = () => {
    createNewExpenseRef.current?.close()
  }

  const handleAfterCreateNewExpense = () => {
    handleChangeDate(date)
  }

  useEffect(() => {
    handleChangeDate(date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    createNewExpenseRef,
    date,
    error: homeFacadeHook.error,
    isWaiting: homeFacadeHook.isWaiting,
    isShowMoreExpensesButtonVisable,
    expenses: safeExpenses,
    expensesGrouped: safeExpensesGrouped,
    handleChangeDate,
    handleOpenCreateNewExpenses,
    handleCloseCreateNewExpenses,
    handleAfterCreateNewExpense,
  }
}
