import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useBottomSheetContainerComponentStyles } from "@/presentation/components/BottomSheet/Container/BottomSheetContainerComponent.styles"
import { IBottomSheetContainerComponentProps } from "@/presentation/components/BottomSheet/Container/BottomSheetContainerComponent.types"

export const BottomSheetContainerComponent = forwardRef(
  <T,>(props: IBottomSheetContainerComponentProps<T>, ref: any) => {
    const styles = useBottomSheetContainerComponentStyles()

    const bottomSheetRef = useRef<BottomSheetModal>(null)

    useImperativeHandle(ref, () => ({
      open: (data: any) => {
        bottomSheetRef.current?.present(data)
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
        {({ data }) => <props.SheetComponent {...data} />}
      </BottomSheetModal>
    )
  },
)
