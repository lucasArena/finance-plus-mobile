import { makeCreateExpenseFactory } from "@/application/factories/services/CreateExpenseFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useCreateExpenseHook = () =>
  useFetchHook(makeCreateExpenseFactory())
