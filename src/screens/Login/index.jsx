/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  Button,
  HStack,
  VStack,
  FormControl,
  Input,
  Box,
  Center,
  Heading,
  Link,
  Pressable,
} from "native-base";

function Login({ navigation }) {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome to PokeAPP
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Pressable>
              <Link
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </Pressable>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => {
              navigation.navigate("Main", { screen: "Home" });
            }}
          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I am a new user.
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                {" Sign UP"}
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
