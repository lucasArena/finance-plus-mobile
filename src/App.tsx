import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { Routes } from "@/presentation/routes"
import { AuthProvider } from "@/presentation/providers/Auth/AuthProvider"
import { makeAsyncStorageFactory } from "@/application/factories/infra/Storage/AsyncStorageFactory"
import { ToastProvider } from "@/presentation/providers/Toast/ToastProvider"
import { BottomSheetModalProvider } from "@/presentation/providers/BottomSheet/BottomSheetModalProvider"

if (__DEV__) {
  require("../ReactotronConfig")
}

export const App = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <AuthProvider storage={makeAsyncStorageFactory()}>
          <Routes />
          <ToastProvider />
        </AuthProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
