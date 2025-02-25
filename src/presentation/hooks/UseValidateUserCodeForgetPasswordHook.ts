import { makeValidateUserCodeForgetPasswordFactory } from "@/application/factories/services/ValidateUserCodeForgetPasswordFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useValidateUserCodeForgetPasswordHook = () =>
  useFetchHook(makeValidateUserCodeForgetPasswordFactory())
