import { makeListUserExpensesFactory } from "@/application/factories/services/ListUserExpensesFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useListUserExpensesHook = () =>
  useFetchHook(makeListUserExpensesFactory())
