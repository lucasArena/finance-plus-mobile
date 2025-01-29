import { makeUserSignUpServiceFactory } from "@/application/factories/services/UserSignUpServiceFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useUserSignUpHook = () =>
  useFetchHook(makeUserSignUpServiceFactory())
