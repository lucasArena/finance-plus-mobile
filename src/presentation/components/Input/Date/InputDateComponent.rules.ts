import { useState } from "react"

import { IInputDateComponentProps } from "@/presentation/components/Input/Date/InputDateComponent.types"

const currentDate = new Date()

export const useInputDateComponentRules = (props: IInputDateComponentProps) => {
  const [selected, setSelected] = useState<Date>(
    props.defaultDate ?? currentDate,
  )
  const [selectedText, setSelectedText] = useState<string>(
    props.defaultDate
      ? selected.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          timeZone: "UTC",
        })
      : "",
  )
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleToggleCalendar = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleChangeDate = (selectedDate: string) => {
    const safeDate = new Date(selectedDate)

    setSelected(safeDate)
  }

  const handleConfirmDate = () => {
    const safeTextDate = selected.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    })

    setSelectedText(safeTextDate)
    handleToggleCalendar()

    props.onChangeDate?.(selected)
  }

  return {
    selected,
    selectedText,
    selectedDate: selected.toISOString().split("T")[0],
    isOpenModal,
    handleChangeDate,
    handleToggleCalendar,
    handleConfirmDate,
  }
}
