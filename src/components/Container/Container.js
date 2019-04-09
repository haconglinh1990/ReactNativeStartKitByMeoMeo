import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import styles from "./styles";

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return <ScrollView style={containerStyles}>{children}</ScrollView>;
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string
};

export default Container;
