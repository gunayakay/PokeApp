import React from "react";
import { Center } from "native-base";

function Evolution() {
  return (
    <Center
      flex={1}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      Evolution
    </Center>
  );
}
export default Evolution;
