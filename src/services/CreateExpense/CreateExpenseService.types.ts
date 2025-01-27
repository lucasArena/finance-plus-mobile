export namespace CreateExpenseServiceNamespace {
  export interface IRequest {
    typeId: string
    description: string
    value: number
    date: string
  }

  export type TResponse = void
}
