import React, { forwardRef, useImperativeHandle, useRef } from "react"
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet"
import { useBottomSheetContainerComponentStyles } from "@/presentation/components/BottomSheet/Container/BottomSheetContainerComponent.styles"
import { IBottomSheetContainerComponentProps } from "@/presentation/components/BottomSheet/Container/BottomSheetContainerComponent.types"

export const BottomSheetContainerComponent = forwardRef(
  <T,>(props: IBottomSheetContainerComponentProps<any>, ref: any) => {
    const styles = useBottomSheetContainerComponentStyles()

    const bottomSheetRef = useRef<BottomSheetModal>(null)

    useImperativeHandle(ref, () => ({
      open: (data: T) => {
        bottomSheetRef.current?.present(data)
      },
      close: () => {
        bottomSheetRef.current?.snapToPosition(0)
        bottomSheetRef.current?.dismiss()
      },
    }))

    const handleRenderBackdrop = (backDropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backDropProps}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="none"
      />
    )

    return (
      <BottomSheetModal
        enableDynamicSizing
        snapPoints={[]}
        ref={bottomSheetRef}
        containerStyle={styles.container}
        backdropComponent={handleRenderBackdrop}
        backgroundStyle={styles.background}>
        {({ data }) => <props.SheetComponent {...data} />}
      </BottomSheetModal>
    )
  },
)
