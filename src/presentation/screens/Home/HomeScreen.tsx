import React from "react"
import { SafeAreaView } from "react-native"

import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"

export const HomeScreen: React.FC = () => {
  const auth = useAuth()
  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <SafeAreaView>
      <TextComponent color="red" size={20} weight={400}>
        HomeScreen
      </TextComponent>

      <ButtonComponent variant="primary" onPress={() => handleSignOut()}>
        Sign out
      </ButtonComponent>
    </SafeAreaView>
  )
}
