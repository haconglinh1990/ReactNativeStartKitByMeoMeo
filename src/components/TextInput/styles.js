import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default (styles = EStyleSheet.create({
  $buttonBackgroundColorBase: "$white",
  $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: "$emphasizedRowBgColor",
    width: "95%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "$border",
    borderRadius: BORDER_RADIUS,
    alignSelf: "center",
    height: INPUT_HEIGHT,
    flexDirection: "row",
    alignItems: "center"
  },
  containerDisable: {
    backgroundColor: "$lightGray"
  },
  buttonContainer: {
    height: INPUT_HEIGHT - 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$primaryColor",
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 16,
    color: "$textColor"
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: "$inputText"
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: "$border"
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "$rowBackground"
  },
  searchBarTextInput: {
    flex: 1,
    height: 40,
    backgroundColor: "$rowBackground",
    paddingHorizontal: 15,
    color: "$tintColor"
  },
  searchBarIcon: {
    marginRight: 10,
    backgroundColor: "$rowBackground"
  }
}));
