import React from "react";
import { Center } from "native-base";

function BaseStats() {
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
      BaseStats
    </Center>
  );
}
export default BaseStats;
