import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useInputTextComponentStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 24,
      borderWidth: 2,
      borderColor: theme.white.light,
      paddingHorizontal: 34,
      paddingVertical: 0,
      height: 48,
    },
    input: {
      color: theme.white.light,
      flex: 1,
    },
    labelContainer: {
      position: "absolute",
      top: -10,
      left: 28,
      zIndex: 1,
      elevation: 1,
      backgroundColor: theme.black.main,
      alignSelf: "flex-start",
      paddingHorizontal: 6,
    },
    disabled: {
      opacity: 0.4,
    },
    error: {
      borderColor: theme.error,
    },
  })
}
