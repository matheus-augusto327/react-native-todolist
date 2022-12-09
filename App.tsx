import { StatusBar } from "react-native";
import React from "react";
import Home from "./src/components/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
