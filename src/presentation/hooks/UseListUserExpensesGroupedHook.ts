import { makeListUserExpensesGroupedFactory } from "@/application/factories/services/ListUserExpensesGroupedFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useListUserExpensesGroupedHook = () =>
  useFetchHook(makeListUserExpensesGroupedFactory())
