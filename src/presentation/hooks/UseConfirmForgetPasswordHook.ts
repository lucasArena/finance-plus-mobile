import { makeConfirmForgetPasswordFactory } from "@/application/factories/services/ConfirmForgetPasswordFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useConfirmForgetPasswordHook = () =>
  useFetchHook(makeConfirmForgetPasswordFactory())
