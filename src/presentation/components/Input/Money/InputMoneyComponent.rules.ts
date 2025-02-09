import { useState } from "react"
import { IInputTextComponentProps } from "@/presentation/components/Input/Text/InputTextComponent.types"

export const useInputMoneyComponentRules = (
  props: IInputTextComponentProps,
) => {
  const [value, setValue] = useState<string>("")

  const handleChange = (text: string) => {
    const cleanText = text.replace(/[^0-9]+/g, "")

    if (cleanText === "00" || !cleanText) {
      setValue("")
      props.onChangeText?.("")

      return
    }

    const integerPart = cleanText.slice(0, -2).padStart(1, "0")
    const decimalPart = cleanText.slice(-2).padStart(2, "0")

    const textNumberWithSanitazed = `${integerPart}.${decimalPart}`

    const formattedValue = Number(textNumberWithSanitazed).toLocaleString(
      props.locale || "pt-BR",
    )

    setValue(formattedValue)
    props.onChangeText?.(formattedValue)
  }

  return { value, handleChange }
}
