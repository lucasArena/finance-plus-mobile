export interface IEnvironment {
  ENVIRONMENT: "localhost" | "production"
  BLUEFIN_BASE_URL: number
}

declare module "react-native-config" {
  export interface NativeConfigEncrypted {
    DATA: string
  }

  export interface NativeConfig {
    readonly ENVIRONMENT: "localhost" | "production"
    readonly BLUEFIN_BASE_URL: string
    readonly DECRYPT_KEY: string
  }

  export const Config: NativeConfig | NativeConfigEncrypted
  export default Config
}
