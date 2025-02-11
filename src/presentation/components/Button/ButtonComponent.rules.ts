import { useTheme } from "@/presentation/theme/Theme"
import {
  IButtonProps,
  IButtonVariants,
} from "@/presentation/components/Button/ButtonComponent.types"
import { TouchableOpacityProps } from "react-native"

export const useButtonComponentRules = (props: IButtonProps) => {
  const theme = useTheme()

  const baseButtonStyles: TouchableOpacityProps["style"] = {
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
  }

  const variants: Record<IButtonVariants, TouchableOpacityProps["style"]> = {
    primary: {
      ...baseButtonStyles,
      backgroundColor: theme.secondary.green,
    },
    secondary: {
      ...baseButtonStyles,
      borderColor: theme.white.light,
    },
    error: {
      ...baseButtonStyles,
      borderColor: theme.white.light,
    },
  }

  const variantTextColor: Record<IButtonVariants, string> = {
    primary: theme.black.main,
    secondary: theme.white.light,
    error: theme.error,
  }

  return {
    variantStyles: variants[props.variant],
    variantTextColor: variantTextColor[props.variant],
  }
}
