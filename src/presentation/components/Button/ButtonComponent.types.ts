import { TouchableOpacityProps } from "react-native"

export type IButtonVariants = "primary" | "secondary"

export interface IButtonProps extends TouchableOpacityProps {
  variant: IButtonVariants
  loading?: boolean
  fullWidth?: boolean
  startIcon?: React.ReactNode
}
