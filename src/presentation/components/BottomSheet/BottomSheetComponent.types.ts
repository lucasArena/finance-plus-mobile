import { ViewStyle } from "react-native"

export interface IBottomSheetComponentProps {
  backgroundStyle: ViewStyle
}

export interface IBottomSheetComponentRef {
  open: () => void
  close: () => void
}
