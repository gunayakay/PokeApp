/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Button } from "native-base";

function DarkMode() {
  return (
    <Button
      borderWidth={1}
      _light={{ bg: "teal", _text: { color: "white" } }}
      _dark={{ bg: "amber" }}
    >
      Sample
    </Button>
  );
}

export default DarkMode;
