import { IExpense } from "@/domain/Expense.types"

export type IExpensesGroupedByDate = Record<string, IExpense[]>

export const listUserExpensesAdapter = (rawExpenses: IExpense[]) => {
  const adaptedExpenses = rawExpenses.reduce<IExpensesGroupedByDate>(
    (adaptExpenses, expense) => {
      const expenseDate = new Date(expense.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        timeZone: "UTC",
      })

      if (!adaptExpenses[expenseDate]) {
        adaptExpenses[expenseDate] = [expense]
        return adaptExpenses
      }

      adaptExpenses[expenseDate].push(expense)
      return adaptExpenses
    },
    {},
  )

  return Object.entries(adaptedExpenses).map(([title, expenses]) => ({
    title,
    data: expenses,
  }))
}
