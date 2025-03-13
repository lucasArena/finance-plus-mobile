/* eslint-disable react/no-unstable-nested-components */
import React from "react"

import { View } from "react-native"
import { PieChartPro } from "react-native-gifted-charts"
import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { useChartPieComponentStyles } from "@/presentation/components/Chart/Pie/ChartPieComponent.styles"
import { useChartComponentRules } from "@/presentation/components/Chart/Pie/ChartPieComponent.rules"
import { IChartPieComponentProps } from "@/presentation/components/Chart/Pie/ChartPieComponent.types"

export const ChartPieComponent: React.FC<IChartPieComponentProps> = props => {
  const theme = useTheme()

  const styles = useChartPieComponentStyles()
  const rules = useChartComponentRules(props)

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChartPro
          isAnimated={false}
          data={rules.formattedData.map(data => ({
            value: data.value,
            color: data.color,
          }))}
          centerLabelComponent={() => (
            <TextComponent size={18} color={theme.white.light} weight={700}>
              {rules.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </TextComponent>
          )}
          donut
          innerRadius={90}
        />
      </View>

      <View style={styles.legendContainer}>
        {rules.formattedData
          .filter(formattedData => formattedData.show)
          .map((data, index) => (
            <View style={styles.legendItem} key={`chart-pie-legend-${index}`}>
              <View
                style={[styles.legendSquare, { backgroundColor: data.color }]}
              />

              <View style={styles.legendItemTextContainer}>
                <TextComponent size={10} color={theme.white.light} weight={400}>
                  {data.label}
                </TextComponent>

                <TextComponent size={10} color={theme.white.light} weight={400}>
                  {data.percentage}%
                </TextComponent>
              </View>
            </View>
          ))}
      </View>
    </View>
  )
}
