import { AsyncStorage } from "@/infra/Storage/AsyncStorage/AsyncStorage"

export const makeAsyncStorageFactory = () => {
  return new AsyncStorage()
}
