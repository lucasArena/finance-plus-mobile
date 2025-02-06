import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useCardComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      backgroundColor: theme.tertiary.linear,
      paddingHorizontal: 24,
      paddingVertical: 24,
      borderRadius: 30,
    },
  })
}
