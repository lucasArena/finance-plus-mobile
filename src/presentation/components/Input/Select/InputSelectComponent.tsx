/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Modal, FlatList } from "react-native"
import { InputTextComponent } from "@/presentation/components/Input/Text/InputTextComponent"
import { IInputSelectComponentProps } from "@/presentation/components/Input/Select/InputSelectComponent.types"
import { ButtonComponent } from "@/presentation/components/Button/ButtonComponent"
import { useInputSelectComponentStyles } from "@/presentation/components/Input/Select/InputSelectComponent.styles"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { TextComponent } from "@/presentation/components/Text/TextComponent"

export const InputSelectComponent = <T,>({
  defaultValue,
  ...props
}: IInputSelectComponentProps<T>) => {
  const theme = useTheme()

  const [selected, setSelected] = useState<T | null>()
  const [modalVisible, setModalVisible] = useState(false)

  const styles = useInputSelectComponentStyles()

  const handleSelect = (value: T) => {
    setSelected(value)
    props.onValueChange(value)

    setModalVisible(false)
  }

  useEffect(() => {
    if (defaultValue && props.options.length !== 0) {
      const defaultOption = props.options.find(
        option => option[props.keyExtractor] === defaultValue,
      )

      setSelected(defaultOption)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, props.options])

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
              ListHeaderComponent={() => (
                <>
                  <TextComponent
                    color={theme.white.light}
                    size={20}
                    weight={700}
                    style={styles.optionText}>
                    Selecione a categoria
                  </TextComponent>

                  <DividerComponent
                    height={1}
                    color={theme.tertiary.grey}
                    verticalSpacing={8}
                  />
                </>
              )}
              ItemSeparatorComponent={() => (
                <DividerComponent
                  height={1}
                  color={theme.tertiary.grey}
                  verticalSpacing={10}
                />
              )}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <TextComponent
                    color={theme.white.light}
                    size={18}
                    weight={500}
                    style={styles.optionText}>
                    {item[props.labelExtractor] as string}
                  </TextComponent>
                </TouchableOpacity>
              )}
            />

            <View>
              <DividerComponent
                height={1}
                color={theme.tertiary.grey}
                verticalSpacing={10}
              />

              <ButtonComponent
                variant="primary"
                onPress={() => setModalVisible(false)}>
                Cancelar
              </ButtonComponent>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
