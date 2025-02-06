export interface ITokenDecoded {
  key: string
  name: string
}

export interface IToken {
  decrypt: (token: string) => ITokenDecoded | null
}
