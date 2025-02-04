import { makeAuthFacadeFactory } from "@/application/factories/facades/Auth/AuthFacadeFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useAuthFacadeHook = () => useFetchHook(makeAuthFacadeFactory())
