export interface IExpenseItemComponentProps {
  description: string
  value: number
  typeName: string
  hideSensitiveInformation?: boolean
  onPress?: () => void
}
