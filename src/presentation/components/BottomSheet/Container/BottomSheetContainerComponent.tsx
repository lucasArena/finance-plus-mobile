import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { IBottomSheetComponentRef } from "@/presentation/components/BottomSheet/BottomSheetComponent.types"
import { useBottomSheetContainerComponentStyles } from "@/presentation/components/BottomSheet/Container/BottomSheetContainerComponent.styles"

export const BottomSheetContainerComponent = forwardRef<
  IBottomSheetComponentRef,
  React.PropsWithChildren
>((props, ref) => {
  const styles = useBottomSheetContainerComponentStyles()

  const bottomSheetRef = useRef<BottomSheetModal>(null)

  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.present()
    },
    close: () => {
      bottomSheetRef.current?.snapToPosition(0)
      bottomSheetRef.current?.dismiss()
    },
  }))

  return (
    <BottomSheetModal
      enableDynamicSizing
      snapPoints={[]}
      ref={bottomSheetRef}
      containerStyle={styles.container}
      backgroundStyle={styles.background}>
      {props.children}
    </BottomSheetModal>
  )
})
