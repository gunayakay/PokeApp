import React from "react";
import {
  useColorMode,
  Text,
  Center,
  Box,
  useColorModeValue,
  Switch,
} from "native-base";

function DarkMode() {
  const { toggleColorMode } = useColorMode();
  return (
    <Center flex={1} w="100%">
      <Box
        p="4"
        flex="1"
        bg={useColorModeValue("warmGray.50", "coolGray.800")}
        maxW="300"
        w="100%"
      >
        <Text fontSize="lg" display="flex" mb={20}>
          The active color mode is{" "}
          <Text bold fontSize="18px">
            {useColorModeValue("Light", "Dark")}
          </Text>
        </Text>
        <Switch onChange={toggleColorMode} />
      </Box>
    </Center>
  );
}
export default DarkMode;
