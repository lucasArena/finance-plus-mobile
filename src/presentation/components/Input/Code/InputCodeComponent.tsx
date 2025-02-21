import React, { useState } from "react"

import { TextInput, View } from "react-native"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { IInputCodeComponentProps } from "@/presentation/components/Input/Code/InputCodeComponent.types"
import { useTheme } from "@/presentation/theme/Theme"
import { useInputCodeComponentStyles } from "@/presentation/components/Input/Code/InputCodeComponent.styles"
// import { useInputCodeComponentRules } from "@/presentation/components/Input/Code/InputCodeComponent.rules"

export const InputCodeComponent: React.FC<IInputCodeComponentProps> = props => {
  const [code, setCode] = useState<string>("")
  const theme = useTheme()

  //   const rules = useInputCodeComponentRules(props)
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

          return (
            <View style={styles.inputContainer} key={index}>
              <TextInput
                ref={inputRef}
                maxLength={1}
                keyboardType="number-pad"
                textAlign="center"
                style={styles.input}
                onChangeText={text => {
                  const isAdding = text.length === 1

                  const codeWithText = isAdding
                    ? `${code}${text}`
                    : code.substring(0, code.length - 1)

                  const inputIndexRef = isAdding ? index + 1 : index - 1
                  const nextInputRef = inputRefs[inputIndexRef]

                  if (nextInputRef && nextInputRef.current) {
                    nextInputRef.current.focus()
                  }

                  setCode(codeWithText)
                  props.onChangeText?.(codeWithText)
                }}
              />
            </View>
          )
        })}
      </View>
    </View>
  )
}
