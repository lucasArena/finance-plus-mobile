import { makeValidateUserCodeEmailFactory } from "@/application/factories/services/ValidateUserCodeEmailFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useValidateUserCodeEmailHook = () =>
  useFetchHook(makeValidateUserCodeEmailFactory())
