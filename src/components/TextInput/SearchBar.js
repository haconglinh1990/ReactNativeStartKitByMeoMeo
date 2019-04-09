import React, { PropTypes } from "react";
import { View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Colors from "../../constants/Colors";
import styles from "./styles";

const ICON_COLOR = Colors.tintColor;
const ICON_SIZE = 23;

const SearchBar = ({ onChangeText, value, placeholder, placeholderTextColor, selectionColor, onPress }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBarTextInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Ionicons
        name={`ios-search`}
        color={ICON_COLOR}
        size={ICON_SIZE}
        style={styles.searchBarIcon}
        onPress={onPress}
      />
    </View>
  );
};

SearchBar.PropTypes = {
  onChangeText: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  selectionColor: PropTypes.string,
  onPress: PropTypes.func
};

export default SearchBar;
