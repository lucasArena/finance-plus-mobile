import { makeUserSendActivationCodeFactory } from "@/application/factories/services/UserSendActivationCodeFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useUserSendActivationCodeHook = () =>
  useFetchHook(makeUserSendActivationCodeFactory())
