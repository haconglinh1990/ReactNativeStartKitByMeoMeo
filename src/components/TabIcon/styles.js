import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    zIndex: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  badgeContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    top: -5,
    right: -8,
    borderRadius: 8,
    backgroundColor: "$primaryRed",
    zIndex: 2
  },
  containerAndroid: {
    zIndex: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  badgeContainerAndroid: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    bottom: 27,
    left: 25,
    borderRadius: 8,
    backgroundColor: "$primaryRed",
    zIndex: 2
  },
  badgeText: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "$white",
    lineHeight: 16,
    backgroundColor: "transparent"
  },
  badgeTextAndroid: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "$white",
    backgroundColor: "transparent"
  },
  tabIconStyle: {
    width: 28,
    marginBottom: 1
  }
});
