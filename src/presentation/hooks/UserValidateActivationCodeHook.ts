import { makeUserValidateActivationCodeFactory } from "@/application/factories/services/UserValidateActivationCodeFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useUserValidateActivationCodeHook = () =>
  useFetchHook(makeUserValidateActivationCodeFactory())
