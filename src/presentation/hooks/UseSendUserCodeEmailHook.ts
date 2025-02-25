import { makeSendUserCodeEmailFactory } from "@/application/factories/services/SendUserCodeEmailFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useSendUserCodeEmailHook = () =>
  useFetchHook(makeSendUserCodeEmailFactory())
