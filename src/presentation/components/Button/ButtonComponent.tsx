import React from "react"

import { Button } from "react-native-paper"
import { TButtonProps } from "./ButtonComponent.types"

export const ButtonComponent: React.FC<TButtonProps> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>
}
