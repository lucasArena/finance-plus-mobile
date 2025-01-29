import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import React from "react"

import { SafeAreaView } from "react-native"

export const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <InputTextComponent label="Name" />
      <InputTextComponent label="Email" />
      <InputTextComponent label="Password" />

      <ButtonComponent mode="contained">Cadastrar</ButtonComponent>
    </SafeAreaView>
  )
}
