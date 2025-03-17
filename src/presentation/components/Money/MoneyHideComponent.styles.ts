import { StyleSheet } from "react-native"

export const useMoneyHideComponentStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    ball: {
      width: 8,
      height: 8,
      borderRadius: "50%",
    },
  })
}
