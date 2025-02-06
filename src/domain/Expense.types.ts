import { IExpenseType } from "@/domain/ExpenseType.types"

export interface IExpense {
  key: string
  description: string
  value: number
  type: Pick<IExpenseType, "key" | "name">
  date: string
  createdAt: string
  updatedAt: string
}
