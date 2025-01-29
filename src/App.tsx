import React from "react"
import { Routes } from "@/presentation/routes"

if (__DEV__) {
  require("../ReactotronConfig")
}

export const App = () => {
  return <Routes />
}
