export namespace ListUserExpensesGroupedServiceNamespace {
  export interface IRequest {
    month: number
    year: number
  }

  export interface IResponse {
    typeId: string
    name: string
    color: string
    total: number
  }
}
