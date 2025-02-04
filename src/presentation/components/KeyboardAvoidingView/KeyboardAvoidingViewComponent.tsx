import React from "react"
import { KeyboardAvoidingView, Platform } from "react-native"
import { useKeyboardAvoidingViewComponentStyles } from "@/presentation/components/KeyboardAvoidingView/KeyboardAvoidingViewComponent.styles"

export const KeyboarAvoidingViewComponent: React.FC<
  React.PropsWithChildren
> = props => {
  const styles = useKeyboardAvoidingViewComponentStyles()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      {props.children}
    </KeyboardAvoidingView>
  )
}
