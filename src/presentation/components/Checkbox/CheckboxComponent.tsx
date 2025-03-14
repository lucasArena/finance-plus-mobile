import React from "react"
import { View } from "react-native"

import CheckBox from "react-native-bouncy-checkbox"

import { TCheckboxComponentProps } from "@/presentation/components/Checkbox/CheckboxComponent.types"

export const CheckboxComponent: React.FC<TCheckboxComponentProps> = props => {
  return (
    <View>
      <CheckBox {...props} />
    </View>
  )
}
