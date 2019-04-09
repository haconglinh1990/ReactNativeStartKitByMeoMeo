import React, {Component} from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {Root, StyleProvider} from "native-base";
import configureStore from './store';
import getTheme from './theme/components';
import material from './theme/variables/material';
import AlertProvider from './components/Alert/AlertProvider';
import AppNavigation from "./navigation/AppNavigation";
// import Splash from './components/Splash/index';


const {store, persistor} = configureStore();

export default class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      // isLoading: false
    };

  }

  render() {
    if (!store) {
      return (
        <View style={{ flex: 1, backgroundColor: "white" }} />
      );
    }
    return (

      <Root>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <StyleProvider style={getTheme(material)}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AlertProvider>
                <AppNavigation />
              </AlertProvider>
            </PersistGate>
          </Provider>
        </StyleProvider>
      </Root>
    );
  }
}