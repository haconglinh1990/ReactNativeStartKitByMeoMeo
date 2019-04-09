import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import TabNavigation from "./TabNavigation";
import AuthNavigation from "./AuthNavigation";

const RootNavigation = createStackNavigator(
  {
    main: {
      screen: TabNavigation,
      navigationOptions: ({ navigation }) => {
        const { routes, index } = navigation.state;

        switch (routes[index].routeName) {
          case 'Market':
            return {title: 'Market'};
          case 'Trading':
            return {title: 'Trading'};
          case 'Wallet':
            return {title: 'Wallet'};
          case 'Account':
            return {title: 'Account'};

          default:
            return {title: 'Market'};
        }
      }
    },
    // auth: {
    //   screen: AuthNavigation
    // },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        color: '#adadad'
      },
      headerStyle: {
        backgroundColor: '#292a24'
      },
      headerTintColor: '#adadad'
    }),
    headerMode: 'screen',
    mode: 'card'
  }
);

export default createAppContainer(RootNavigation);
