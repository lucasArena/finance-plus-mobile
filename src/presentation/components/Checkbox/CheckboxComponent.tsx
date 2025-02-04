import React from "react"

import CheckBox from "@react-native-community/checkbox"
import { TCheckboxComponentProps } from "@/presentation/components/Checkbox/CheckboxComponent.types"

export const CheckboxComponent: React.FC<TCheckboxComponentProps> = props => {
  return <CheckBox {...props} />
}
