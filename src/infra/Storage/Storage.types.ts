export interface IStorage {
  setItem(tkey: string, value: string): Promise<void>
  removeItem(key: string): Promise<void>
  getItem(key: string): Promise<string | null>
}
