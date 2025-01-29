import { HelperText } from "react-native-paper"
import { THelperTextComponentProps } from "@/presentation/components/HelperText/HelperTextComponent.types"

export const HelperTextComponent: React.FC<
  THelperTextComponentProps
> = props => {
  return <HelperText {...props} />
}
