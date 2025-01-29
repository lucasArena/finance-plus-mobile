import React from "react"
import { View } from "react-native"

import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { IInputFieldComponentProps } from "@/presentation/components/Input/Field/InputFieldComponent.types"
import { HelperTextComponent } from "@/presentation/components/HelperText/HelperTextComponent"

export const InputFieldComponent: React.FC<IInputFieldComponentProps> = ({
  helperText,
  ...props
}) => {
  return (
    <View>
      <InputTextComponent {...props} />

      {helperText && (
        <HelperTextComponent type={props.error ? "error" : "info"}>
          {helperText}
        </HelperTextComponent>
      )}
    </View>
  )
}
