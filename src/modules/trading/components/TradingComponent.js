import React, {Component} from "react";
import {View, Text} from "react-native";


class TradingComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <Text style={{
          flex: 1, alignContent: "center", alignSelf: "center", color: 'green'
        }}
        >
TradingComponent Screen
        </Text>
      </View>
    );
  }
}

export default TradingComponent;
