import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useToastComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      padding: 10,
      backgroundColor: theme.white.light,
      width: "80%",
      borderRadius: 30,
    },
    logo: {
      paddingLeft: 10,
    },
    text: {
      color: theme.black.main,
    },
  })
}
