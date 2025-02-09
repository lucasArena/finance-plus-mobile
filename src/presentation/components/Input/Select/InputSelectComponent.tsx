/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from "react"
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native"
import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { IInputSelectComponentProps } from "@/presentation/components/Input/Select/InputSelectComponent.types"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useInputSelectComponentStyles } from "@/presentation/components/Input/Select/InputSelectComponent.styles"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"
import { useTheme } from "@/presentation/theme/Theme"

export const InputSelectComponent = <T,>(
  props: IInputSelectComponentProps<T>,
) => {
  const theme = useTheme()

  const [selected, setSelected] = useState<T | null>(null)
  const [modalVisible, setModalVisible] = useState(false)

  const styles = useInputSelectComponentStyles()

  const handleSelect = (value: T) => {
    setSelected(value)
    props.onValueChange(value)
    setModalVisible(false)
  }

  return (
    <View>
      <InputTextComponent
        {...props}
        value={selected?.[props.labelExtractor] as string}
        readOnly
        onPress={() => setModalVisible(true)}
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={props.options}
              keyExtractor={item => item[props.keyExtractor] as string}
              ItemSeparatorComponent={() => (
                <DividerComponent height={1} color={theme.tertiary.grey} />
              )}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>
                    {item[props.labelExtractor] as string}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <ButtonComponent
              variant="primary"
              onPress={() => setModalVisible(false)}>
              Close
            </ButtonComponent>
          </View>
        </View>
      </Modal>
    </View>
  )
}
