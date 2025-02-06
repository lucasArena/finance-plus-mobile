import { IExpense } from "@/domain/Expense.types"
import {
  IPaginationRequest,
  IPaginationResponse,
} from "@/application/utils/types/pagination.types"

export namespace ListUserExpensesServiceNamespace {
  export interface IRequest extends IPaginationRequest {
    month: number
    year: number
  }

  export interface IResponse extends IPaginationResponse<IExpense> {}
}
