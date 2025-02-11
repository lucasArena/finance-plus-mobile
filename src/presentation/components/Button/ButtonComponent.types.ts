import { TouchableOpacityProps } from "react-native"

export type IButtonVariants = "primary" | "secondary" | "error"

export interface IButtonProps extends TouchableOpacityProps {
  variant: IButtonVariants
  loading?: boolean
  fullWidth?: boolean
  outlined?: boolean
  startIcon?: React.ReactNode
}
