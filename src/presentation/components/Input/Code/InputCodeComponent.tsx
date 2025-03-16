import React, { useState } from "react"

import { TextInput, View } from "react-native"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { IInputCodeComponentProps } from "@/presentation/components/Input/Code/InputCodeComponent.types"
import { useTheme } from "@/presentation/theme/Theme"
import { useInputCodeComponentStyles } from "@/presentation/components/Input/Code/InputCodeComponent.styles"

export const InputCodeComponent: React.FC<IInputCodeComponentProps> = props => {
  const [inputValues, setInputValues] = useState<string[]>(
    Array(props.length).fill(""),
  )
  const theme = useTheme()

  const styles = useInputCodeComponentStyles()

  const inputRefs = Array.from({ length: props.length }).map(() =>
    React.createRef<TextInput>(),
  )

  return (
    <View style={styles.container}>
      <TextComponent
        size={14}
        weight={700}
        color={props.error ? theme.error : theme.secondary.green}>
        {props.label}
      </TextComponent>

      <View style={styles.codeContainer}>
        {Array.from({ length: props.length }).map((_, index) => {
          const inputRef = inputRefs[index]
          const previousInputRef = inputRefs[index - 1]
          const nextInputRef = inputRefs[index + 1]

          return (
            <View style={styles.inputContainer} key={index}>
              <TextInput
                ref={inputRef}
                value={inputValues[index]}
                keyboardType="number-pad"
                textAlign="center"
                style={styles.input}
                onKeyPress={e => {
                  const previousValue = inputValues[index]

                  if (
                    e.nativeEvent.key === "Backspace" &&
                    previousInputRef &&
                    !previousValue
                  ) {
                    previousInputRef.current?.focus()
                  }
                }}
                onChangeText={newValue => {
                  const safeNewValue = newValue.slice(-1)

                  if (safeNewValue) {
                    nextInputRef
                      ? nextInputRef.current?.focus()
                      : inputRef.current?.blur()
                  }

                  const updatedValues = [...inputValues]
                  updatedValues[index] = safeNewValue
                  setInputValues(updatedValues)

                  // Call parent's onChangeText callback if provided
                  props.onChangeText?.(updatedValues.join(""))
                }}
              />
            </View>
          )
        })}
      </View>
    </View>
  )
}
