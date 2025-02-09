import React from "react"

import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { IInputTextComponentProps } from "@/presentation/components/Input/Text/InputTextComponent.types"
import { useInputTextAreaComponentStyles } from "@/presentation/components/Input/TextArea/InputTextAreaComponent.styles"

export const InputTextAreaComponent: React.FC<
  IInputTextComponentProps
> = props => {
  const styles = useInputTextAreaComponentStyles()

  return (
    <InputTextComponent
      {...props}
      multiline
      numberOfLines={4}
      containerStyles={styles.container}
    />
  )
}
