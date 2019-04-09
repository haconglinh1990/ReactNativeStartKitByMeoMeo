import React, {Component} from "react";
import {View, Text} from "react-native";


class MarketComponent extends Component {

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <Text style={{
          flex: 1, alignContent: "center", alignSelf: "center", color: 'green'
        }}
        >
MarketComponent Screen
        </Text>
      </View>
    );
  }
}


export default MarketComponent;
