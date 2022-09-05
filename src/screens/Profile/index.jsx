/* eslint-disable global-require */
import React, { useState, useEffect } from "react";
import { Box, ScrollView } from "native-base";
import Card from "../../components/Card";
import { getPokemons } from "../../storage/likeStorage";

function Profile() {
  const [likeArray, setlikeArray] = useState([]);
  useEffect(() => {
    (async () => {
      const currentLikes = await getPokemons();
      setlikeArray(currentLikes);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box
        flex={1}
        padding={5}
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "warmGray.50",
        }}
      >
        {likeArray.map((item) => (
          <Card id={item} />
        ))}
      </Box>
    </ScrollView>
  );
}
export default Profile;
