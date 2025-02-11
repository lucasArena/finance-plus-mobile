import { makeEditExpenseTypeFactory } from "@/application/factories/services/EditExpenseFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useEditExpenseHook = () =>
  useFetchHook(makeEditExpenseTypeFactory())
