import * as Yup from "yup"

import { useForm } from "@/presentation/hooks/UseForm"
import {
  IExpenseForm,
  IExpenseSheetProps,
} from "@/presentation/sheets/Expense/ExpenseSheet.types"
import { useListAllExpenseCategoriesHook } from "@/presentation/hooks/UseListAllExpenseCategoriesHook"
import { useCreateExpenseHook } from "@/presentation/hooks/UseCreateExpenseHook"
import { useEffect } from "react"
import { Toast } from "@/presentation/providers/Toast/ToastProvider"
import { useEditExpenseHook } from "@/presentation/hooks/UseEditExpenseHook"
import { useDeleteExpenseHook } from "@/presentation/hooks/UseDeleteExpenseHook"
import { formatStringToFloatUtil } from "@/application/utils/FormatStringToFloat/FormatStringToFloatUtil"

const defaultSchema: Record<keyof IExpenseForm, Yup.AnyObject> = {
  key: Yup.string().notRequired(),
  expenseTypeId: Yup.string().required(),
  description: Yup.string().notRequired(),
  value: Yup.string().required(),
  date: Yup.date().required(),
}

const defaultValues: IExpenseForm = {
  key: "",
  expenseTypeId: "",
  description: "",
  value: "",
  date: new Date(),
}

export const useExpenseSheetRules = (props: IExpenseSheetProps) => {
  const form = useForm<IExpenseForm>({
    schema: defaultSchema,
    defaultValues: props.defaultValues ?? defaultValues,
  })

  const listAllExpensesCategories = useListAllExpenseCategoriesHook()
  const createExpense = useCreateExpenseHook()
  const editExpense = useEditExpenseHook()
  const deleteExpense = useDeleteExpenseHook()

  const expensesTypes = listAllExpensesCategories.data ?? []

  const disableSubmit =
    listAllExpensesCategories.isWaiting || createExpense.isWaiting

  const handleSubmit = (submittedValues: IExpenseForm) => {
    const formattedDate = submittedValues.date
      .toISOString()
      .replace("T", " ")
      .substring(0, 19)

    const formattedValue = formatStringToFloatUtil(submittedValues.value)

    submittedValues.key
      ? editExpense.handleFetch({
          key: submittedValues.key,
          typeId: submittedValues.expenseTypeId,
          description: submittedValues.description,
          value: formattedValue,
          date: formattedDate,
        })
      : createExpense.handleFetch({
          typeId: submittedValues.expenseTypeId,
          description: submittedValues.description,
          value: formattedValue,
          date: formattedDate,
        })
  }

  const handleDelete = () => {
    deleteExpense.handleFetch(form.values.key)
  }

  useEffect(() => {
    listAllExpensesCategories.handleFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (createExpense.error) {
      Toast({ type: "error", text1: createExpense.error, position: "top" })

      createExpense.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createExpense.error])

  useEffect(() => {
    if (createExpense.isSuccess) {
      Toast({ type: "success", text1: "Despesa cadastrada com sucesso" })
      createExpense.handleResetState()

      props.onSubmit?.()
      props.onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createExpense.isSuccess])

  useEffect(() => {
    if (editExpense.isSuccess) {
      Toast({ type: "success", text1: "Despesa editada com sucesso" })
      editExpense.handleResetState()

      props.onSubmit?.()
      props.onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editExpense.isSuccess])

  useEffect(() => {
    if (editExpense.error) {
      Toast({ type: "error", text1: editExpense.error, position: "top" })

      editExpense.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editExpense.error])

  useEffect(() => {
    if (deleteExpense.isSuccess) {
      Toast({ type: "success", text1: "Despesa deletada com sucesso" })

      deleteExpense.handleResetState()

      props.onSubmit?.()
      props.onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteExpense.isSuccess])

  useEffect(() => {
    if (deleteExpense.error) {
      Toast({ type: "error", text1: deleteExpense.error, position: "top" })

      deleteExpense.handleResetState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteExpense.error])

  return {
    expensesTypes,
    values: form.values,
    errors: form.errors,
    disableSubmit,
    handleSubmit: form.handleSubmit(handleSubmit),
    isWaiting: createExpense.isWaiting || editExpense.isWaiting,
    isWaitingDelete: deleteExpense.isWaiting,
    handleSetValue: form.handleSetValue,
    handleDelete,
  }
}
