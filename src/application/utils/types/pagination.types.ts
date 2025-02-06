export interface IPaginationRequest {
  page: number
  pageSize: number
}

export interface IPaginationResponse<T> {
  page: number
  pageSize: number
  total: number
  totalPages: number
  items: T[]
}

// export interface IPaginationResponse<T> extends IPaginationResponseBase {
//   data: T[]
// }
