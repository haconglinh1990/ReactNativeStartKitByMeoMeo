import React, {Component} from "react";
// import {View, Text} from "react-native";
import {Content, Text} from "native-base";


class AccountComponent extends Component {
  render() {
    return (
      <Content>
        <Text style={{
          flex: 1, alignContent: "center", alignSelf: "center"
        }}
        >
        AccountComponent Screen
        </Text>
      </Content>
    );
  }
}

export default AccountComponent;
