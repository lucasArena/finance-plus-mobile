import { IChartPieComponentProps } from "@/presentation/components/Chart/Pie/ChartPieComponent.types"

export const generateRandomColor = () => {
  const letters = "0123456789ABCDEF"
  let color = "#"

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const useChartComponentRules = (props: IChartPieComponentProps) => {
  const total = props.data.reduce(
    (currentTotal, current) => (currentTotal += current.value),
    0,
  )

  const formattedData = props.data.map(data => ({
    label: data.label,
    value: data.value,
    color: generateRandomColor(),
    percentage: Math.floor((data.value / total) * 100),
    show: true,
  }))

  const safeFormattedData =
    formattedData.length === 1
      ? [
          ...formattedData,
          {
            label: "",
            value: 0.01,
            color: "transparent",
            percentage: 0,
            show: false,
          },
        ]
      : formattedData

  return {
    total,
    formattedData: safeFormattedData,
  }
}
