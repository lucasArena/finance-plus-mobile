import { TextProps, TextStyle } from "react-native"

export interface ITextProps extends TextProps {
  size: TextStyle["fontSize"]
  color: TextStyle["color"]
  weight: TextStyle["fontWeight"]
  underlined?: boolean
}
