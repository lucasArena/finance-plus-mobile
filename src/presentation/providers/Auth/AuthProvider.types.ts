import { IStorage } from "@/infra/Storage/Storage.types"

export interface IAuthContext {
  token: string | null
  signIn: (token: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface IAuthProviderProps {
  storage: IStorage
}
