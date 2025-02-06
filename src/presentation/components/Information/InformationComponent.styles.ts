import { StyleSheet } from "react-native"

export const useInformationComponentStyles = () => {
  return StyleSheet.create({
    container: {
      gap: 18,
      justifyContent: "center",
      alignItems: "center",
    },
    noShow: {
      opacity: 0,
    },
    title: {
      textAlign: "center",
    },
  })
}
