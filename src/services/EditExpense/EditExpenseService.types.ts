export namespace EditExpenseServiceNamespace {
  export interface IRequest {
    key: string
    typeId: string
    description: string
    value: number
    date: string
  }

  export type TResponse = void
}
