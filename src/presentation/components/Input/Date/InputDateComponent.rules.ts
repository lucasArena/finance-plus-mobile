import { useState } from "react"

import { IInputDateComponentProps } from "@/presentation/components/Input/Date/InputDateComponent.types"

const currentDate = new Date()

export const useInputDateComponentRules = (props: IInputDateComponentProps) => {
  const [selected, setSelected] = useState<Date>(
    props.defaultDate ?? currentDate,
  )
  const [selectedText, setSelectedText] = useState<string>("")
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleToggleCalendar = () => {
    console.log(isOpenModal)
    setIsOpenModal(!isOpenModal)
  }

  const handleChangeDate = (selectedDate: string) => {
    console.log(selectedDate)

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
