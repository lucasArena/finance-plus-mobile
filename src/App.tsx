import React from "react"
import { Routes } from "@/presentation/routes"
import { AuthProvider } from "./presentation/providers/Auth/AuthProvider"
import { makeAsyncStorageFactory } from "./application/factories/infra/Storage/AsyncStorageFactory"
import { ToastProvider } from "@/presentation/providers/Toast/ToastProvider"

if (__DEV__) {
  require("../ReactotronConfig")
}

export const App = () => {
  return (
    <AuthProvider storage={makeAsyncStorageFactory()}>
      <Routes />
      <ToastProvider />
    </AuthProvider>
  )
}
