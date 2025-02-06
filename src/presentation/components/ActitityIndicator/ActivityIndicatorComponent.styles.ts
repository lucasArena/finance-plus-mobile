import { StyleSheet } from "react-native"

export const useActivityIndicatorComponentStyles = () => {
  return StyleSheet.create({
    default: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  })
}
