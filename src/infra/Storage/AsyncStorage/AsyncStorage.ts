import { IStorage } from "@/infra/Storage/Storage.types"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

export class AsyncStorage implements IStorage {
  async setItem(key: string, value: string): Promise<void> {
    await ReactNativeAsyncStorage.setItem(key, value)
  }

  async removeItem(key: string): Promise<void> {
    await ReactNativeAsyncStorage.removeItem(key)
  }

  async getItem(key: string): Promise<string | null> {
    return await ReactNativeAsyncStorage.getItem(key)
  }
}
