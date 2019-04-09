import EStyleSheet from "react-native-extended-stylesheet";

export default (styles = EStyleSheet.create({
  container: {
    alignItems: "center",
    "@media ios": {
      paddingTop: 8
    }
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  icon: {
    width: 22,
    color: "$textColor"
  },
  textStyle: {
    color: "$textColor",
    fontSize: 18,
    paddingBottom: 4
  }
}));
