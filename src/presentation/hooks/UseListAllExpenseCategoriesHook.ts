import { makeListAllExpenseCategoriesFactory } from "@/application/factories/services/ListAllExpenseCategoriesFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useListAllExpenseCategoriesHook = () =>
  useFetchHook(makeListAllExpenseCategoriesFactory())
