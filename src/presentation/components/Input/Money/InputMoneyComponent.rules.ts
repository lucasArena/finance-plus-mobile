import { useState } from "react"
import { InputMoneyComponentProps } from "@/presentation/components/Input/Money/InputMoneyComponent.types"

export const useInputMoneyComponentRules = (
  props: InputMoneyComponentProps,
) => {
  const [value, setValue] = useState<string>(
    props.defaultValue
      ? Number(props.defaultValue).toLocaleString(props.locale || "pt-BR", {
          minimumFractionDigits: 2,
        })
      : "",
  )

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
      { minimumFractionDigits: 2 },
    )

    setValue(formattedValue)
    props.onChangeText?.(formattedValue)
  }

  return { value, handleChange }
}
