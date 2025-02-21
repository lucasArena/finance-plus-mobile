export function formatStringToFloatUtil(moneyString: string): number {
  const cleanedString = moneyString.replace(/[^0-9.-]+/g, "")

  const integerPart = cleanedString.slice(0, -2)
  const decimalPart = cleanedString.slice(-2)
  const formattedString = `${integerPart}.${decimalPart}`

  const floatNumber = parseFloat(formattedString)

  return isNaN(floatNumber) ? 0 : floatNumber
}
