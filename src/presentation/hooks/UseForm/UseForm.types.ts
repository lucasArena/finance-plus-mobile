export type IFormFields = Record<string, any>

export interface IUseForm<T extends IFormFields> {
  schema: Record<keyof T, any>
  defaultValues?: Record<keyof T, T[keyof T]>
}

export interface IUseFormResponse<T extends IFormFields> {
  values: T
  errors: Record<string, any>
  // handleValidate: (fields: T) => Promise<boolean>
  handleSubmit: any
  handleSetValue: (key: keyof T, value: T[keyof T]) => void
}
