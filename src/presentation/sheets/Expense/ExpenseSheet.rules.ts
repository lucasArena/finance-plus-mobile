import * as Yup from "yup"

import { useForm } from "@/presentation/hooks/UseForm"
import { IExpenseForm } from "@/presentation/sheets/Expense/ExpenseSheet.types"
import { useListAllExpenseTypesHook } from "@/presentation/hooks/UseListAllExpenseTypesHook"
import { useCreateExpenseHook } from "@/presentation/hooks/UseCreateExpenseHook"
import { useEffect } from "react"

const defaultSchema: Record<keyof IExpenseForm, Yup.AnyObject> = {
  expenseTypeId: Yup.string().required(),
  description: Yup.string().required(),
  value: Yup.string().required(),
  date: Yup.string().required(),
}

export const useExpenseSheetRules = () => {
  const form = useForm({ schema: defaultSchema })

  const listAllExpensesTypes = useListAllExpenseTypesHook()
  const createExpense = useCreateExpenseHook()

  const expensesTypes = listAllExpensesTypes.data ?? []

  const disableSubmit = listAllExpensesTypes.isWaiting

  const handleSubmit = (submittedValues: IExpenseForm) => {
    createExpense.handleFetch({
      typeId: submittedValues.expenseTypeId,
      description: submittedValues.description,
      value: parseFloat(submittedValues.value),
      date: "",
    })
  }

  useEffect(() => {
    listAllExpensesTypes.handleFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    expensesTypes,
    values: form.values,
    errors: form.errors,
    disableSubmit,
    handleSubmit: form.handleSubmit(handleSubmit),
    handleSetValue: form.handleSetValue,
  }
}
