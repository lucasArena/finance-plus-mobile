export namespace ListUserExpensesServiceNamespace {
  export type TRequest = void

  export interface IResponse {
    key: string
    description: string
    type: {
      name: string
      description: string
    }
    createdAt: string
    updatedAt: string
  }
}
