import React from "react";
import {
  Box,
  HStack,
  AspectRatio,
  Heading,
  VStack,
  Pressable,
  Image,
  Text,
} from "native-base";

function Card({ text, imageURL }) {
  return (
    <Pressable flex={1}>
      <Box margin={2} alignItems="center" bg="red.400">
        <Box
          bg
          paddingTop="4"
          paddingBottom="2"
          paddingX="2"
          width="100%"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
        >
          <Heading size="md" color="white">
            <Text>{text}</Text>
          </Heading>

          <Box>
            <HStack space={2}>
              <VStack>
                <Text>{text}</Text>
              </VStack>
              <AspectRatio w="50%" ratio={1 / 1}>
                <Image source={imageURL} w="100%" h="150" />
              </AspectRatio>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}
export default Card;
