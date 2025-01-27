export namespace UserSignUpServiceNamespace {
  export interface IRequest {
    username: string
    email: string
    password: string
  }

  export type TResponse = void
}
