export interface IEnvironment {
  ENVIRONMENT: "localhost" | "production"
  FINANCE_PLUS_BASE_URL: number
}

declare module "react-native-config" {
  export interface NativeConfigEncrypted {
    DATA: string
  }

  export interface NativeConfig {
    readonly ENVIRONMENT: "localhost" | "production"
    readonly FINANCE_PLUS_BASE_URL: string
    readonly DECRYPT_KEY: string
  }

  export const Config: NativeConfig | NativeConfigEncrypted
  export default Config
}
