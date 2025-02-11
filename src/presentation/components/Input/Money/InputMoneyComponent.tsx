import React from "react"

import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { useInputMoneyComponentRules } from "@/presentation/components/Input/Money/InputMoneyComponent.rules"
import { InputMoneyComponentProps } from "@/presentation/components/Input/Money/InputMoneyComponent.types"

export const InputMoneyComponent: React.FC<InputMoneyComponentProps> = ({
  defaultValue,
  ...props
}) => {
  const rules = useInputMoneyComponentRules({ defaultValue, ...props })

  return (
    <InputTextComponent
      {...props}
      value={rules.value}
      onChangeText={rules.handleChange}
      keyboardType="number-pad"
    />
  )
}
