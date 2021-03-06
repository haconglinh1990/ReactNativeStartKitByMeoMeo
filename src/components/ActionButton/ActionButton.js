import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform, Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ActionButtonItem from "./ActionButtonItem";
import {
  alignItemsMap,
  DEFAULT_ACTIVE_OPACITY,
  getTouchableComponent,
  isAndroid,
  shadowStyle,
  touchableBackground
} from "./shared";
import EStyleSheet from "react-native-extended-stylesheet";
import { platform } from "os";

export default class ActionButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetToken: props.resetToken,
      active: props.active
    };

    this.anim = new Animated.Value(props.active ? 1 : 0);
    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resetToken !== this.state.resetToken) {
      if (nextProps.active === false && this.state.active === true) {
        if (this.props.onReset) this.props.onReset();
        Animated.spring(this.anim, { toValue: 0 }).start();
        setTimeout(() => this.setState({ active: false, resetToken: nextProps.resetToken }), 250);
        return;
      }

      if (nextProps.active === true && this.state.active === false) {
        Animated.spring(this.anim, { toValue: 1 }).start();
        this.setState({ active: true, resetToken: nextProps.resetToken });
        return;
      }

      this.setState({
        resetToken: nextProps.resetToken,
        active: nextProps.active
      });
    }
  }

  //////////////////////
  // STYLESHEET GETTERS
  //////////////////////

  getOrientation() {
    return { alignItems: alignItemsMap[this.props.position] };
  }

  getOffsetXY() {
    return {
      // paddingHorizontal: this.props.offsetX,
      paddingVertical: this.props.offsetY
    };
  }

  getOverlayStyles() {
    return [
      styles.overlay,
      {
        elevation: this.props.elevation,
        zIndex: this.props.zIndex,
        justifyContent: this.props.verticalOrientation === "up" ? "flex-end" : "flex-start"
      }
    ];
  }

  //////////////////////
  // RENDER METHODS
  //////////////////////

  render() {
    return (
      <View pointerEvents="box-none" style={[this.getOverlayStyles(), this.props.style]}>
        <Animated.View
          pointerEvents="none"
          style={[
            this.getOverlayStyles(),
            {
              backgroundColor: this.props.bgColor,
              opacity: this.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, this.props.bgOpacity]
              })
            }
          ]}
        >
          {this.props.backdrop}
        </Animated.View>
        <View pointerEvents="box-none" style={[this.getOverlayStyles(), this.getOrientation(), this.getOffsetXY()]}>
          {this.state.active && !this.props.backgroundTappable && this._renderTappableBackground()}

          {this.props.verticalOrientation === "up" && this.props.children && this._renderActions()}
          {this._renderMainButton()}
          {this.props.verticalOrientation === "down" && this.props.children && this._renderActions()}
        </View>
      </View>
    );
  }

  _renderMainButton() {
    const animatedViewStyle = {
      transform: [
        {
          scale: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, this.props.outRangeScale]
          })
        },
        {
          rotate: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", this.props.degrees + "deg"]
          })
        }
      ]
    };

    const wrapperStyle = {
      width: this.props.size + this.props.padding,
      height: this.props.size + this.props.padding,
      alignItems: "center",
      justifyContent: "center"
      // borderRadius: this.props.size + 10 / 2,
    };

    const buttonDrawStyle = {
      position: "absolute",
      width: this.props.size,
      height: this.props.size,
      borderWidth: 1,
      borderColor: EStyleSheet.value("$tintColor"),
      borderRadius: this.props.size / 2,
      backgroundColor: this.anim.interpolate({
        inputRange: [0, 1],
        outputRange: [this.props.buttonColor, this.props.btnOutRange || this.props.buttonColor]
      }),
      top: this.props.padding / 2,
      right: this.props.padding / 2
    };

    const buttonStyle = {
      position: "absolute",
      justifyContent: "center",
      width: this.props.size + this.props.padding,
      height: this.props.size + this.props.padding,
      borderRadius: (this.props.size + this.props.padding) / 2,
      top: 0,
      right: 0
    };

    const Touchable = getTouchableComponent(this.props.useNativeFeedback);
    const parentStyle =
      isAndroid && this.props.fixNativeFeedbackRadius
        ? {
            right: this.props.offsetX,
            zIndex: this.props.zIndex,
            borderRadius: this.props.size / 2,
            width: this.props.size
          }
        : { marginHorizontal: this.props.offsetX, zIndex: this.props.zIndex };

    return (
      <View
        style={[parentStyle, !this.props.hideShadow && shadowStyle, !this.props.hideShadow && this.props.shadowStyle]}
      >
        <Touchable
          background={touchableBackground(this.props.nativeFeedbackRippleColor, this.props.fixNativeFeedbackRadius)}
          activeOpacity={this.props.activeOpacity}
          onLongPress={this.props.onLongPress}
          onPress={() => {
            this.props.onPress();
            if (this.props.children) this.animateButton();
          }}
          onPressIn={this.props.onPressIn}
          onPressOut={this.props.onPressOut}
        >
          <Animated.View style={wrapperStyle}>
            <Animated.View style={this.props.hasBorder ? buttonDrawStyle : []} />
            <Animated.View style={[buttonStyle, animatedViewStyle]}>{this._renderButtonIcon()}</Animated.View>
          </Animated.View>
        </Touchable>
      </View>
    );
  }

  _renderButtonIcon() {
    const { icon, btnOutRangeTxt, buttonTextStyle, buttonText } = this.props;
    if (icon) return icon;

    const textColor = buttonTextStyle.color || "rgba(255,255,255,1)";

    return (
      <Animated.View>
        <Animated.Text
          style={[
            styles.btnText,
            buttonTextStyle,
            {
              color: this.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [textColor, btnOutRangeTxt || textColor]
              })
            }
          ]}
        >
          {buttonText}
        </Animated.Text>
        {this.props.badgeHide ? null : !!this.props.badge ? (
          <Animated.View style={styles.badgeContainer}>
            <Animated.Text style={styles.badgeText}>{this.props.badge}</Animated.Text>
          </Animated.View>
        ) : null}
      </Animated.View>
    );
  }

  _renderActions() {
    const { children, verticalOrientation } = this.props;

    if (!this.state.active) return null;

    const actionButtons = !Array.isArray(children) ? [children] : children;

    const actionStyle = {
      flex: 1,
      alignSelf: "stretch",
      // backgroundColor: 'purple',
      justifyContent: verticalOrientation === "up" ? "flex-end" : "flex-start",
      paddingTop: this.props.verticalOrientation === "down" ? this.props.spacing : 0,
      zIndex: this.props.zIndex
    };

    return (
      <View style={actionStyle} pointerEvents={"box-none"}>
        {actionButtons.map((ActionButton, idx) => (
          <ActionButtonItem
            key={idx}
            anim={this.anim}
            {...this.props}
            {...ActionButton.props}
            parentSize={this.props.size}
            btnColor={this.props.btnOutRange}
            onPress={() => {
              if (this.props.autoInactive) {
                this.timeout = setTimeout(this.reset.bind(this), 200);
              }
              ActionButton.props.onPress();
            }}
          />
        ))}
      </View>
    );
  }

  _renderTappableBackground() {
    return <TouchableOpacity activeOpacity={1} style={this.getOverlayStyles()} onPress={this.reset.bind(this)} />;
  }

  //////////////////////
  // Animation Methods
  //////////////////////

  animateButton(animate = true) {
    if (this.state.active) return this.reset();

    if (animate) {
      Animated.spring(this.anim, { toValue: 1 }).start();
    } else {
      this.anim.setValue(1);
    }

    this.setState({ active: true, resetToken: this.state.resetToken });
  }

  reset(animate = true) {
    if (this.props.onReset) this.props.onReset();

    if (animate) {
      Animated.spring(this.anim, { toValue: 0 }).start();
    } else {
      this.anim.setValue(0);
    }

    setTimeout(() => this.setState({ active: false, resetToken: this.state.resetToken }), 250);
  }
}

ActionButton.Item = ActionButtonItem;

ActionButton.propTypes = {
  resetToken: PropTypes.any,
  active: PropTypes.bool,

  position: PropTypes.string,
  elevation: PropTypes.number,
  zIndex: PropTypes.number,

  hideShadow: PropTypes.bool,
  shadowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),

  bgColor: PropTypes.string,
  bgOpacity: PropTypes.number,
  buttonColor: PropTypes.string,
  buttonTextStyle: Text.propTypes.style,
  buttonText: PropTypes.string,

  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  spacing: PropTypes.number,
  size: PropTypes.number,
  autoInactive: PropTypes.bool,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  degrees: PropTypes.number,
  verticalOrientation: PropTypes.oneOf(["up", "down"]),
  backgroundTappable: PropTypes.bool,
  activeOpacity: PropTypes.number,

  useNativeFeedback: PropTypes.bool,
  fixNativeFeedbackRadius: PropTypes.bool,
  nativeFeedbackRippleColor: PropTypes.string
};

ActionButton.defaultProps = {
  resetToken: null,
  active: false,
  bgColor: "transparent",
  bgOpacity: 1,
  buttonColor: "rgba(0,0,0,0)",
  buttonTextStyle: {},
  buttonText: "+",
  spacing: 20,
  outRangeScale: 1,
  autoInactive: true,
  onPress: () => {},
  onPressIn: () => {},
  onPressOn: () => {},
  backdrop: false,
  degrees: 45,
  position: "right",
  offsetX: 30,
  offsetY: 30,
  size: 56,
  verticalOrientation: "up",
  backgroundTappable: false,
  useNativeFeedback: true,
  activeOpacity: DEFAULT_ACTIVE_OPACITY,
  fixNativeFeedbackRadius: false,
  nativeFeedbackRippleColor: "rgba(255,255,255,0.75)"
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "transparent"
  },
  btnText: {
    marginTop: -6,
    marginLeft: 1,
    fontSize: 24,
    backgroundColor: "transparent"
  },
  badgeContainer: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    top: Platform.OS === "ios" ? -12 : -9,
    right: Platform.OS === "ios" ? 2 : 2,
    borderRadius: 10,
    backgroundColor: "#dd2200",
    zIndex: 3
  },
  badgeText: {
    marginTop: -3,
    fontSize: 12,
    paddingTop: 1.5,
    color: "#fff",
    backgroundColor: "transparent"
  }
});
