import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../Button";

const HeaderButton = ({ icon, onPress, textColor, text, disabled }) => {
  if (!!icon) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
          <Ionicons name={`ios-${icon}`} color={textColor} size={28} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
          <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

HeaderButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func
};

export default HeaderButton;
