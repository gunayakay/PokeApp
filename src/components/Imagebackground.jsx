import React from "react";
import { Factory, Link, Box, Text } from "native-base";
import { ImageBackground as Background } from "react-native";
import PropTypes from "prop-types";

function ImageBackground({ href, imageURL, subText, heading }) {
  const FactoryImageBackground = Factory(Background);
  return (
    <Link href={href}>
      <Box>
        <FactoryImageBackground source={imageURL}>
          <Box>
            <Text>{heading}</Text>
            <Text>{subText}</Text>
          </Box>
        </FactoryImageBackground>
      </Box>
    </Link>
  );
}

ImageBackground.propTypes = {
  href: PropTypes.string,
  imageURL: PropTypes.string,
  subText: PropTypes.string,
  heading: PropTypes.string,
};
ImageBackground.defaultProps = {
  href: "",
  imageURL: "",
  subText: "",
  heading: "",
};

export default ImageBackground;
