/* eslint-disable react/no-unstable-nested-components */
import React from "react"

import ToastLib, { BaseToastProps } from "react-native-toast-message"

import { ToastComponent } from "@/presentation/components/Toast/ToastComponent"

export const Toast = (params: any) =>
  ToastLib.show({ position: "bottom", ...params })

export const ToastProvider: React.FC = () => {
  const toastConfig = {
    success: (props: BaseToastProps) => (
      <ToastComponent type="success" title={props.text1 as string} />
    ),
    error: (props: BaseToastProps) => (
      <ToastComponent type="error" title={props.text1 as string} />
    ),
  }

  return <ToastLib config={toastConfig} />
}
