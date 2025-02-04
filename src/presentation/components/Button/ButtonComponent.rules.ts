import { useTheme } from "@/presentation/theme/Theme"
import {
  IButtonProps,
  IButtonVariants,
} from "@/presentation/components/Button/ButtonComponent.types"
import { TouchableOpacityProps } from "react-native"

export const useButtonComponentRules = (props: IButtonProps) => {
  const theme = useTheme()

  const variants: Record<IButtonVariants, TouchableOpacityProps["style"]> = {
    primary: {
      backgroundColor: theme.secondary.green,
      paddingVertical: 12,
      alignItems: "center",
      borderRadius: 20,
    },
    secondary: {
      backgroundColor: "transparent",
      paddingVertical: 12,
      alignItems: "center",
      borderRadius: 20,
      borderColor: theme.white.light,
      borderWidth: 2,
    },
  }

  const variantTextColor: Record<IButtonVariants, string> = {
    primary: theme.black.main,
    secondary: theme.white.light,
  }

  return {
    variantStyles: variants[props.variant],
    variantTextColor: variantTextColor[props.variant],
  }
}
