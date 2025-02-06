import { useMemo, useState } from "react"

import { IFilterCalendarComponentProps } from "@/presentation/components/Filter/Calendar/FilterCalendarComponent.types"

const defaultDate = new Date()

export const useFilterCalendarComponentRules = (
  props: IFilterCalendarComponentProps,
) => {
  const [date, setDate] = useState<Date>(props.initialDate || defaultDate)

  const monthLabel = useMemo(
    () => new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date),
    [date],
  )

  const yearLabel = useMemo(
    () => new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(date),
    [date],
  )

  const handleGoBack = () => {
    const safeDate = new Date(date)

    safeDate.setMonth(safeDate.getMonth() - 1)

    setDate(safeDate)

    if (props.onChangeDate) {
      props.onChangeDate(safeDate)
    }
  }

  const handleGoForward = () => {
    const safeDate = new Date(date)
    safeDate.setMonth(safeDate.getMonth() + 1)

    setDate(safeDate)

    props.onChangeDate(safeDate)
  }

  return { date, monthLabel, yearLabel, handleGoBack, handleGoForward }
}
