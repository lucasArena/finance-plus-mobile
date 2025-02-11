import { ViewStyle } from "react-native"

export interface IBottomSheetComponentProps {
  backgroundStyle: ViewStyle
}

export interface IBottomSheetComponentRef<T> {
  open: (props: T) => void
  close: () => void
}
