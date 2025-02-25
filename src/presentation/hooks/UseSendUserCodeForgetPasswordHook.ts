import { makeSendUserCodeForgetPasswordFactory } from "@/application/factories/services/SendUserCodeForgetPasswordFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useSendUserCodeForgetPasswordHook = () =>
  useFetchHook(makeSendUserCodeForgetPasswordFactory())
