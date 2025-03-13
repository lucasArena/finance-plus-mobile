import React from "react"

import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { Pressable, View } from "react-native"
import { useProfileScreenRules } from "@/presentation/screens/Profile/ProfileScreen.rules"
import { useProfileScreenStyles } from "@/presentation/screens/Profile/ProfileScreen.styles"
import { AvatarComponent } from "@/presentation/components/Avatar/AvatarComponent"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"

import ExitLogo from "@/presentation/assets/exit-logo.svg"
import { useAuth } from "@/presentation/providers/Auth/AuthProvider"

export const ProfileScreen: React.FC = () => {
  const rules = useProfileScreenRules()
  const styles = useProfileScreenStyles()

  const theme = useTheme()
  const auth = useAuth()

  return (
    <View style={styles.container}>
      <HeaderDefaultComponent title="Perfil" goBack />

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.profileInfo}>
            <AvatarComponent size={100} name={auth.tokenDecrypted?.name} />
            <TextComponent color={theme.white.light} size={18} weight={500}>
              {auth.tokenDecrypted?.name}
            </TextComponent>
          </View>

          <Pressable onPress={() => rules.handleSignOut()}>
            <View style={styles.optionItem}>
              <TextComponent color={theme.white.light} size={16} weight={500}>
                Sair da conta
              </TextComponent>

              <ExitLogo />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
