import { makeHomeFacadeFactory } from "@/application/factories/facades/Home/HomeFacadeFactory"
import { useFetchHook } from "@/presentation/hooks/UseFetchHook"

export const useHomeFacadeHook = () => useFetchHook(makeHomeFacadeFactory())
