import { IInputTextComponentProps } from "@/presentation/components/Input/Text/InputTextComponent.types"

export interface IInputSelectComponentProps<T>
  extends IInputTextComponentProps {
  keyExtractor: keyof T
  labelExtractor: keyof T
  options: T[]
  onValueChange: (value: T) => void
}
