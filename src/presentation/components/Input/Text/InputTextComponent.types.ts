import { TextInputProps, ViewStyle } from "react-native"

export interface IInputTextComponentProps extends TextInputProps {
  label?: string
  error?: boolean
  helperText?: string
  endIcon?: React.ReactNode
  disabled?: boolean
  required?: boolean
  locale?: string
  loading?: boolean
  containerStyles?: ViewStyle
  render?: React.ElementType<TextInputProps>
}
