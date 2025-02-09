import React from "react"

import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { IInputTextComponentProps } from "@/presentation/components/Input/Text/InputTextComponent.types"
import { useInputMoneyComponentRules } from "@/presentation/components/Input/Money/InputMoneyComponent.rules"

export const InputMoneyComponent: React.FC<
  IInputTextComponentProps
> = props => {
  const rules = useInputMoneyComponentRules(props)

  return (
    <InputTextComponent
      {...props}
      value={rules.value}
      onChangeText={rules.handleChange}
      keyboardType="number-pad"
    />
  )
}
