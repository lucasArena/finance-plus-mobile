export namespace ConfirmForgetPasswordServiceNamespace {
  export interface IRequest {
    email: string
    password: string
    passwordConfirmation: string
  }

  export type TResponse = void
}
