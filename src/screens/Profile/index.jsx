/* eslint-disable global-require */
import React from "react";
import { Box, ScrollView } from "native-base";
import Card from "../../components/Card";

function Profile() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box margin={5}>
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
        <Card
          imageURL={require("../../static/3.jpg")}
          title="Pokemon ismi"
          type="Type"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nibh sed augue sodales porttitor sit amet ac dui."
        />
      </Box>
    </ScrollView>
  );
}
export default Profile;
