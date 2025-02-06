import { makeListUserExpensesFactory } from "@/application/factories/services/ListUserExpensesFactory"
import { useFetchPaginateHook } from "@/presentation/hooks/UseFetchPaginateHook"

export const useListUserExpensesHook = () =>
  useFetchPaginateHook(makeListUserExpensesFactory())
