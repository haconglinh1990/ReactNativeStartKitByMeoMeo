import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import DropdownAlert from "./DropdownAlert";
import { connect } from "react-redux";

class AlertProvider extends Component {
  static childContextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func
  };
  static propTypes = {
    children: PropTypes.any
  };
  state = {
    thumbnail: null,
    chatRoomId: "",
    callRoomId: ""
  };

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.notification && !!nextProps.notification.chatRoomId) {
      this.setState({
        thumbnail: !!nextProps.notification.thumbnail ? nextProps.notification.thumbnail : null,
        chatRoomId: nextProps.notification.chatRoomId
      });
    }
    if (!!nextProps.notification && !!nextProps.notification.callRoomId) {
      this.setState({
        thumbnail: !!nextProps.notification.thumbnail ? nextProps.notification.thumbnail : null,
        callRoomId: nextProps.notification.callRoomId
      });
    }
  }

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => {
        this.dropdown.alertWithType(...args);
      }
    };
  }

  render() {
    if (!!this.props.notification) {
      return (
        <View style={{ flex: 1 }}>
          {React.Children.only(this.props.children)}
          <DropdownAlert
            inactiveStatusBarStyle="light-content"
            ref={ref => {
              this.dropdown = ref;
            }}
            containerStyle={{ backgroundColor: "#00c398" }}
            imageSrc={this.state.thumbnail}
            onClose={data => {
              if (data.action === "tap") {
              }
            }}
            showCancel={true}
            onPress={() => {}}
          />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          {React.Children.only(this.props.children)}
          <DropdownAlert
            inactiveStatusBarStyle="light-content"
            ref={ref => {
              this.dropdown = ref;
            }}
            containerStyle={{ backgroundColor: "#00c398" }}
          />
        </View>
      );
    }
  }
}

function mapStateToProps({ notification }) {
  return { notification };
}

export default connect(mapStateToProps)(AlertProvider);
