import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {
  IFormFields,
  IUseForm,
  IUseFormResponse,
} from "@/presentation/hooks/UseForm/UseForm.types"

export const useReactHookForm = <T extends IFormFields>(
  props: IUseForm<T>,
): IUseFormResponse<T> => {
  const form = useForm<T>({
    //@ts-ignore
    defaultValues: props.defaultValues,
    //@ts-ignore
    resolver: yupResolver(
      yup.object().shape({
        ...props.schema,
      }),
    ),
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const values = useMemo<T>(() => form.watch(), [form.watch()])
  const errors = useMemo<Record<keyof T, any>>(
    () => form.formState.errors,
    [form.formState.errors],
  )

  const handleSetValue = (key: keyof T, value: T[keyof T]): void => {
    form.setValue(key as any, value)
  }

  return { values, errors, handleSetValue, handleSubmit: form.handleSubmit }
}
