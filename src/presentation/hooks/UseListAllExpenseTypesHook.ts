import { makeListAllExpenseTypesFactory } from "@/application/factories/services/ListAllExpenseTypesFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useListAllExpenseTypesHook = () =>
  useFetchHook(makeListAllExpenseTypesFactory())
