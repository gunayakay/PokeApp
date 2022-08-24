import React from "react";
import { Box } from "native-base";
import DarkMode from "../../components/DarkMode";

function Settings() {
  return (
    <Box flex={1}>
      <DarkMode />
    </Box>
  );
}

export default Settings;
