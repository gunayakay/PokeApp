import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider } from "native-base";
import Router from "./Router";

const queryClient = new QueryClient();

function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <Router />
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
