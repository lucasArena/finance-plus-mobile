import { makeUserSignUpServiceFactory } from "@/application/factories/services/UserSignUpServiceFactory"
import { useFetchHook } from "./UseFetchHook"

export const useUserSignUpHook = () =>
  useFetchHook(makeUserSignUpServiceFactory())
