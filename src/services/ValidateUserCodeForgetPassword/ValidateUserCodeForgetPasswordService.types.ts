export namespace ValidateUserCodeForgetPasswordServiceNamespace {
  export interface IRequest {
    email: string
    code: string
  }

  export type TResponse = void
}
