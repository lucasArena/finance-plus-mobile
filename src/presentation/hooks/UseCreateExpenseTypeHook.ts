import { useFetchHook } from "@/presentation/hooks/UseFetchHook"
import { makeCreateExpenseTypeFactory } from "@/application/factories/services/CreateExpenseTypeFactory"

export const useCreateExpenseTypeHook = () =>
  useFetchHook(makeCreateExpenseTypeFactory())
