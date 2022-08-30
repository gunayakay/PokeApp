import React, { useCallback } from "react";
import { Text, Center, Box, Switch, useColorMode } from "native-base";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = useCallback(() => {
    toggleColorMode();
  }, []);

  return (
    <Center flex={1} w="full">
      <Box
        p={3}
        w="full"
        flex={1}
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "warmGray.50",
        }}
      >
        <Text fontSize="lg" display="flex" mb="20">
          The active color mode is{" "}
          <Text bold fontSize="lg">
            {colorMode}
          </Text>
        </Text>
        <Switch onChange={handleClick} />
      </Box>
    </Center>
  );
}
export default DarkMode;
