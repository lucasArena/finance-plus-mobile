export interface IExpenseSheetProps {
  onClose: () => void
}

export interface IExpenseForm {
  expenseTypeId: string
  description: string
  value: string
  date: string
}
