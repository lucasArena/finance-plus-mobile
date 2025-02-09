import React from "react"

import { Modal, View } from "react-native"
import { Calendar } from "react-native-calendars"
import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { IInputDateComponentProps } from "@/presentation/components/Input/Date/InputDateComponent.types"
import { useInputDateComponentRules } from "@/presentation/components/Input/Date/InputDateComponent.rules"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useInputDateComponentStyles } from "@/presentation/components/Input/Date/InputDateComponent.styles"

export const InputDateComponent: React.FC<IInputDateComponentProps> = props => {
  const theme = useTheme()

  const styles = useInputDateComponentStyles()
  const rules = useInputDateComponentRules(props)

  return (
    <View>
      <InputTextComponent
        {...props}
        value={rules.selectedText}
        onPress={rules.handleToggleCalendar}
        readOnly
      />

      <Modal
        transparent={true}
        animationType="slide"
        visible={rules.isOpenModal}
        onRequestClose={rules.handleToggleCalendar}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Calendar
              markedDates={{
                [rules.selectedDate]: {
                  selected: true,
                  disableTouchEvent: true,
                },
              }}
              onDayPress={day => rules.handleChangeDate(day.dateString)}
              theme={{
                backgroundColor: theme.black.main,
                calendarBackground: theme.black.main,
                textSectionTitleColor: theme.white.light,
                selectedDayBackgroundColor: theme.primary.blue,
                selectedDayTextColor: theme.white.light,
                todayTextColor: theme.white.light,
                dayTextColor: theme.white.light,
                arrowColor: theme.white.light,
                monthTextColor: theme.white.light,
                textDisabledColor: theme.tertiary.grey,
              }}
            />

            <View style={styles.modalCTA}>
              <ButtonComponent
                variant="secondary"
                fullWidth
                onPress={() => rules.handleToggleCalendar()}>
                Cancelar
              </ButtonComponent>
              <ButtonComponent
                variant="primary"
                fullWidth
                onPress={rules.handleConfirmDate}>
                Confirmar
              </ButtonComponent>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
