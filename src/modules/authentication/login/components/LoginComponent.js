import React, {Component} from "react";
// import {View, Text} from "react-native";
import {Content, Text} from "native-base";


class LoginComponent extends Component {
  render() {
    return (
      <Content>
        <Text style={{
          flex: 1, alignContent: "center", alignSelf: "center"
        }}
        >
          LoginComponent Screen
        </Text>
      </Content>
    );
  }
}

export default LoginComponent;
