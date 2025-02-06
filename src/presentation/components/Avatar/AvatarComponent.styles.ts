import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useAvatarComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: theme.white.light,
      borderRadius: "50%",
    },
    noAvatar: {
      borderRadius: "50%",
      backgroundColor: theme.tertiary.background,
      justifyContent: "center",
      alignItems: "center",
    },
  })
}
