import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider } from "native-base";
import colorModeManager from "./utils/colorModeManager";
import Router from "./Router";

const queryClient = new QueryClient();

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
  useSystemColorMode: false,
  initalColorMode: "dark",
};

function App() {
  // const [darkMode] = useAtom(darkModeAtom);

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider config={config} colorModeManager={colorModeManager}>
          <Router />
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
