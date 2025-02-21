import { TextInputProps } from "react-native"

export interface IInputCodeComponentProps extends TextInputProps {
  label?: string
  error?: boolean
  length: number
}
