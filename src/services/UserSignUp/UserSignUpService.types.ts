export namespace UserSignUpServiceNamespace {
  export interface IRequest {
    name: string
    email: string
    password: string
  }

  export type TResponse = void
}
