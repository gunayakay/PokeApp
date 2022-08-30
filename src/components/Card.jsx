/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Box, HStack, Heading, VStack, Image, Text, Badge } from "native-base";

function Card({ type, about, title, imageURL }) {
  return (
    <Box
      bg="yellow.300"
      w="100%"
      marginBottom={10}
      h="250"
      borderRadius="7"
      padding="3"
    >
      <Box flex="2">
        <Box
          paddingTop="4"
          paddingBottom="2"
          paddingX="2"
          width="100%"
          rounded="lg"
          overflow="hidden"
        >
          <Heading size="md" color="white">
            <Text>{title}</Text>
          </Heading>

          <Box flexDirection="column">
            <HStack space={2}>
              <VStack>
                <Badge
                  maxW="50"
                  color="white"
                  backgroundColor="white"
                  opacity={70}
                  borderRadius="full"
                >
                  <Text color="black">{type}</Text>
                </Badge>

                <Text maxW="180" marginTop="3">
                  {about}
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Box>
      </Box>

      <Box flex="1">
        <Image
          right="4"
          bottom="-30"
          source={require("../static/pikacu.png")}
          w="100"
          height="150"
          position="absolute"
          resizeMode="contain"
          alt="image"
        />
      </Box>
    </Box>
  );
}
export default Card;
