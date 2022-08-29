import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider } from "native-base";
import Router from "./Router";

const queryClient = new QueryClient();

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
};

function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider config={config}>
          <Router />
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
