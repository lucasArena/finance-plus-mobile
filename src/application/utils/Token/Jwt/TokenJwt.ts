import { jwtDecode } from "jwt-decode"
import jwtEncode from "jwt-encode"

import { IToken, ITokenDecoded } from "@/application/utils/Token/Token.types"
import { ENV } from "@/application/utils/env/Env"

export class Token implements IToken {
  constructor() {}

  public decrypt(token: string): ITokenDecoded | null {
    const decoded = jwtDecode(token)

    if (!decoded) return null

    return decoded as ITokenDecoded
  }

  public encrypt(data: Record<string, any>): string {
    return jwtEncode(data, ENV.DECRYPT_KEY)
  }
}
