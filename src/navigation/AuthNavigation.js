import React from 'react';
import {createStackNavigator} from 'react-navigation';
import LoginComponent from "../modules/authentication/login/components/LoginComponent";
import RegisterComponent from "../modules/authentication/register/components/RegisterComponent";
import ResetPasswordComponent
  from "../modules/authentication/resetPassword/components/ResetPasswordComponent";


const AuthNavigation = createStackNavigator(
  {
    login: {
      screen: LoginComponent
    },
    register: {
      screen: RegisterComponent
    },
    resetPass: {
      screen: ResetPasswordComponent
    },

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

export default AuthNavigation;
