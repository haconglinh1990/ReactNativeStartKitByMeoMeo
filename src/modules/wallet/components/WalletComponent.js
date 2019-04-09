import React, {Component} from "react";
import {View, Text} from "react-native";


class WalletComponent extends Component {

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <Text style={{
          flex: 1, alignContent: "center", alignSelf: "center", color: 'green'
        }}
        >
          WalletComponent Screen
        </Text>
      </View>
    );
  }
}

export default WalletComponent;
