import { useEffect, useRef, useState } from "react"

import { useListUserExpensesHook } from "@/presentation/hooks/UseListUserExpensesHook"
import { useRoutes } from "@/presentation/routes"
import { listUserExpensesAdapter } from "@/application/adapters/ListUserExpensesAdapter"
import { IBottomSheetComponentRef } from "@/presentation/components/BottomSheet/BottomSheetComponent.types"
import { IExpenseSheetProps } from "@/presentation/sheets/Expense/ExpenseSheet.types"
import { IExpense } from "@/domain/Expense.types"

export const useListExpensesByDateRules = () => {
  const navigation = useRoutes()
  const routeParams = navigation.getRouteParams("ListExpensesByDate")

  const [date, setDate] = useState<Date>(
    routeParams?.initialDate ? new Date(routeParams?.initialDate) : new Date(),
  )

  const expenseSheetRef =
    useRef<IBottomSheetComponentRef<IExpenseSheetProps>>(null)

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

  const handleEdit = (expense: IExpense) => {
    expenseSheetRef.current?.open({
      onClose: expenseSheetRef.current.close,
      onSubmit: () => handleChangeDate(date),
      defaultValues: {
        key: expense.key,
        expenseTypeId: expense.type.key,
        description: expense.description,
        value: expense.value,
        date: new Date(expense.date),
      },
    })
  }

  useEffect(() => {
    handleChangeDate(date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    sections: listUserExpensesAdapter(listExpensesByDate.data.items),
    date,
    expenseSheetRef,
    isWaiting: listExpensesByDate.isWaiting,
    error: listExpensesByDate.error,
    handleChangeDate,
    handleNextPage: listExpensesByDate.handleNextPage,
    handleEdit,
  }
}
