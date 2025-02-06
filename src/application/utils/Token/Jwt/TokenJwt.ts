import { jwtDecode } from "jwt-decode"

import { IToken, ITokenDecoded } from "@/application/utils/Token/Token.types"

export class Token implements IToken {
  constructor() {}

  public decrypt(token: string): ITokenDecoded | null {
    const decoded = jwtDecode(token)

    if (!decoded) return null

    return decoded as ITokenDecoded
  }
}
