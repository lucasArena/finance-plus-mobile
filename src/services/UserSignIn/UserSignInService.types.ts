export namespace UserSignInServiceNamespace {
  export interface IRequest {
    email: string
    password: string
  }

  export interface IResponse {
    token: string
  }
}
