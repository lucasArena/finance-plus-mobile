import { makeDeleteExpenseTypeFactory } from "@/application/factories/services/DeleteExpenseFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useDeleteExpenseHook = () =>
  useFetchHook(makeDeleteExpenseTypeFactory())
