import { ITokenDecoded } from "@/application/utils/Token/Token.types"
import { IStorage } from "@/infra/Storage/Storage.types"

export interface IAuthContext {
  token: string | null
  tokenDecrypted: ITokenDecoded | null
  signIn: (token: string) => Promise<void>
  activateUser: () => Promise<void>
  signOut: () => Promise<void>
}

export interface IAuthProviderProps {
  storage: IStorage
}
