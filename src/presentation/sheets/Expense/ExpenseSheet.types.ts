export interface IExpenseSheetProps {
  defaultValues?: IExpenseForm
  onClose: () => void
  onSubmit?: () => void
}

export interface IExpenseForm {
  expenseTypeId: string
  description: string
  value: number
  date: Date
  key: string
}
