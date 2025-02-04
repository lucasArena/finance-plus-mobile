import { useTheme } from "@/presentation/theme/Theme"
import { StyleSheet } from "react-native"

export const useSignInScreenStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.black.main,
    },
    headerContainer: {
      backgroundColor: theme.primary.blue,
      height: "45%",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    mainContainer: {
      backgroundColor: theme.black.main,
      paddingHorizontal: 24,
      paddingVertical: 32,
      gap: 16,
    },
    signInAdditionalsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    rememberMeContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    rememberMeCheckbox: {
      width: 14,
      height: 14,
    },
    signInVariantsDivider: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    signInVariantsDividerText: {
      paddingHorizontal: 12,
    },
    signInOptionsContainer: {
      flexDirection: "row",
      gap: 10,
    },
    signUpContainer: {
      alignItems: "center",
    },
  })
}
