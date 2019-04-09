import React from "react";
import {Platform, StyleSheet} from "react-native";
import {createMaterialTopTabNavigator} from "react-navigation";
import AccountComponent from "../modules/account/components/AccountComponent";
import TradingComponent from "../modules/trading/components/TradingComponent";
import WalletComponent from "../modules/wallet/components/WalletComponent";
import MarketComponent from "../modules/market/components/MarketComponent";

const TabNavigation = createMaterialTopTabNavigator(
  {
    Market: {
      screen: MarketComponent,
      navigationOptions: {
      }
    },
    Trading: {
      screen: TradingComponent,
      navigationOptions: {
      }
    },
    Wallet: {
      screen: WalletComponent,
      navigationOptions: {
      }
    },
    Account: {
      screen: AccountComponent,
      navigationOptions: {
      }
    }
  },
  {
    // initialRouteName: 'Friends',
    // Put tab bar on bottom of screen on both platforms
    tabBarPosition: "bottom",
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // lazy: true,
    swipeEnabled: true,
    tabBarOptions: { // Don't show the labels
      showLabel: true,
      showIcon: true,
      style: {
        backgroundColor: "#292a24",
        borderTopWidth: 0,
        borderTopColor: null,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0, 0, 0, .3)"
      },
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        width: 45,
        height: Platform.OS === "ios" ? 27 : 41,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      indicatorStyle: {
        backgroundColor: "transparent"
      }
    }
  }
);

export default TabNavigation;