export interface ITokenDecoded {
  key: string
  name: string
  activatedAt: string
}

export interface IToken {
  decrypt: (token: string) => ITokenDecoded | null
  encrypt: (data: Record<string, any>) => void
}
