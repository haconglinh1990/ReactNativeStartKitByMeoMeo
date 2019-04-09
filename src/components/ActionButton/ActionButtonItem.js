import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from "react-native";
import {
  alignItemsMap,
  DEFAULT_ACTIVE_OPACITY,
  getTouchableComponent,
  isAndroid,
  shadowStyle,
  touchableBackground
} from "./shared";

const { width: WIDTH } = Dimensions.get("window");
const SHADOW_SPACE = 10;
const TEXT_HEIGHT = 22;

const TextTouchable = isAndroid ? TouchableNativeFeedback : TouchableWithoutFeedback;

export default class ActionButtonItem extends Component {
  static get defaultProps() {
    return {
      active: true,
      spaceBetween: 15,
      useNativeFeedback: true,
      activeOpacity: DEFAULT_ACTIVE_OPACITY,
      fixNativeFeedbackRadius: false,
      nativeFeedbackRippleColor: "rgba(255,255,255,0.75)"
    };
  }

  static get propTypes() {
    return {
      active: PropTypes.bool,
      useNativeFeedback: PropTypes.bool,
      fixNativeFeedbackRadius: PropTypes.bool,
      nativeFeedbackRippleColor: PropTypes.string,
      activeOpacity: PropTypes.number
    };
  }

  render() {
    const { size, position, verticalOrientation, hideShadow, spacing } = this.props;

    if (!this.props.active) return null;

    const animatedViewStyle = {
      marginBottom: -SHADOW_SPACE,
      alignItems: alignItemsMap[position],

      // backgroundColor: this.props.buttonColor,
      opacity: this.props.anim,
      transform: [
        {
          translateY: this.props.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalOrientation === "down" ? -40 : 40, 0]
          })
        }
      ]
    };

    const wrapperStyle = {
      width: this.props.size + this.props.padding,
      height: this.props.size + this.props.padding,
      alignItems: "center",
      justifyContent: "center"
    };

    const buttonStyle = {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      width: size + this.props.padding,
      height: size + this.props.padding,
      borderRadius: (size + this.props.padding) / 2,
      top: 0,
      right: 0
    };

    const buttonDrawStyle = {
      position: "absolute",
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: this.props.buttonColor || this.props.btnColor,
      top: this.props.padding / 2,
      right: this.props.padding / 2
    };

    if (position !== "center") buttonStyle[position] = (this.props.parentSize - size) / 2;

    const Touchable = getTouchableComponent(this.props.useNativeFeedback);

    const parentStyle =
      isAndroid && this.props.fixNativeFeedbackRadius
        ? {
            height: size,
            marginBottom: spacing,
            right: this.props.offsetX,
            borderRadius: this.props.size / 2
          }
        : {
            paddingHorizontal: this.props.offsetX,
            height: size + SHADOW_SPACE + spacing
          };
    return (
      <Animated.View pointerEvents="box-none" style={[animatedViewStyle, parentStyle]}>
        <Touchable
          background={touchableBackground(this.props.nativeFeedbackRippleColor, this.props.fixNativeFeedbackRadius)}
          activeOpacity={this.props.activeOpacity || DEFAULT_ACTIVE_OPACITY}
          onPress={this.props.onPress}
        >
          <View style={wrapperStyle}>
            <View style={buttonDrawStyle} />
            <View style={[buttonStyle, !hideShadow ? { ...shadowStyle, ...this.props.shadowStyle } : null]}>
              {this.props.children}
            </View>
          </View>
        </Touchable>
        {this._renderTitle()}
      </Animated.View>
    );
  }

  _renderTitle() {
    if (!this.props.title) return null;

    const { textContainerStyle, hideLabelShadow, offsetX, parentSize, size, position, spaceBetween } = this.props;
    const offsetTop = Math.max((size + this.props.padding) / 2 - TEXT_HEIGHT / 2 - 1, 0);
    const positionStyles = { top: offsetTop };
    const hideShadow = hideLabelShadow === undefined ? this.props.hideShadow : hideLabelShadow;

    if (position !== "center") {
      positionStyles[position] = offsetX + (parentSize - size) / 2 + size + spaceBetween;
    } else {
      positionStyles.right = WIDTH / 2 + size / 2 + spaceBetween;
    }

    const textStyles = [styles.textContainer, positionStyles, !hideShadow && shadowStyle, textContainerStyle];

    const title = React.isValidElement(this.props.title) ? (
      this.props.title
    ) : (
      <Text allowFontScaling={false} style={[styles.text, this.props.textStyle]}>
        {this.props.title}
      </Text>
    );

    return (
      <TextTouchable
        background={touchableBackground(this.props.nativeFeedbackRippleColor, this.props.fixNativeFeedbackRadius)}
        activeOpacity={this.props.activeOpacity || DEFAULT_ACTIVE_OPACITY}
        onPress={this.props.onPress}
      >
        <View style={textStyles}>{title}</View>
      </TextTouchable>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    position: "absolute",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#22231d",
    backgroundColor: "#22231d",
    height: TEXT_HEIGHT
  },
  text: {
    flex: 1,
    fontSize: 13,
    color: "#adadad",
    fontWeight: "700"
  }
});
