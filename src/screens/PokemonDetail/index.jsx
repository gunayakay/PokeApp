/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import {
  useColorModeValue,
  Heading,
  Center,
  Box,
  Text,
  Image,
} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions, Animated, Pressable } from "react-native";
import usePokemon from "../../hooks/usePokemon";
import Loading from "../../components/loading";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import backgroundColor from "../../static/bg";

const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1
  </Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 3
  </Center>
);

const FourthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{" "}
  </Center>
);

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

function PokemonDetail({ route }) {
  const { url } = route.params;
  const { data, isLoading, isError } = usePokemon(url);
  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  const primaryPokemonType = data.types[0].type.name;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "About",
    },
    {
      key: "second",
      title: "Base Stats",
    },
    {
      key: "third",
      title: "Evoluion",
    },
    {
      key: "fourth",
      title: "Moves",
    },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <Box
        flexDirection="row"
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          justifyContent="center"
          alignItems="center"
          height="150"
          width="150"
          position="absolute"
          bottom="12"
          data
        >
          <Heading size="md" color="white" textAlign="center">
            {capitalizeFirstLetter(data.name)}
          </Heading>
          <Image
            source={{
              uri: data.sprites.other["official-artwork"].front_default,
            }}
            alt="image"
            width="full"
            height="full"
          />
        </Box>

        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      flex={1}
      justifyContent="flex-end"
      alignItems="flex-end"
      backgroundColor={backgroundColor[primaryPokemonType]}
    >
      <Box height="3/4" width="full">
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{
            paddingTop: 25,
            width: "100%",
            backgroundColor: "white",
            overflow: "visible",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </Box>
    </Box>
  );
}

export default PokemonDetail;
