import { makeUserSignInServiceFactory } from "@/application/factories/services/UserSignInServiceFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useUserSignInHook = () =>
  useFetchHook(makeUserSignInServiceFactory())
