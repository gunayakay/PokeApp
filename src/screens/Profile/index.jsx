/* eslint-disable global-require */
import React from "react";
import Card from "../../components/Card";

function Profile() {
  return <Card imageURL={require("../../static/3.jpg")} />;
}
export default Profile;
