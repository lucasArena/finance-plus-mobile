import { StyleSheet } from "react-native"

export const useButtonComponentStyles = () => {
  return StyleSheet.create({
    fullWidth: {
      flex: 1,
    },
    contentContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    disabled: {
      opacity: 0.4,
    },
    outlined: {
      borderWidth: 2,
    },
  })
}
