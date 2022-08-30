import React from "react";
import { Center } from "native-base";
import getAbout from "../../../../services/getAbout";
import { useQuery } from "@tanstack/react-query";

function About() {
  const { data, isLoading, isError } = useQuery(["getAbout"], getAbout);
  return (
    <Center flex={1} my="4">
      About
    </Center>
  );
}
export default About;
