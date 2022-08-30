import React from "react";
import { Center } from "native-base";

function Moves() {
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
      Moves
    </Center>
  );
}

export default Moves;
