import { IInputTextComponentProps } from "@/presentation/components/Input/Text/InputTextComponent.types"

export interface InputMoneyComponentProps
  extends Omit<IInputTextComponentProps, "defaultValue"> {
  defaultValue?: number
}
