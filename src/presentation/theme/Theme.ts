import { useColorScheme } from "react-native"
import { darkTheme } from "@/presentation/theme/Dark"
import { lightTheme } from "@/presentation/theme/Light"

export const useTheme = () => {
  const theme = useColorScheme()

  if (!theme) {
    return darkTheme
  }

  return theme === "dark" ? darkTheme : lightTheme
}
