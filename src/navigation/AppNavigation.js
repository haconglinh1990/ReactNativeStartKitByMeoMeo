import React, {Component} from "react";
// import {BackAndroid} from "react-native";
import {connect} from "react-redux";
import {NetInfo} from "react-native";
import RootNavigation from "./RootNavigation";
// import MainTab from './MainTab';
import {connectAlert} from "../components/Alert";
import * as actions from "../store/actions";


// const prevGetStateForAction = RootNavigation.router.getStateForAction;
// const prevGetStateForAction = MainTab.router.getStateForAction;


class AppNavigation extends Component {

  componentWillMount() {
    NetInfo.getConnectionInfo().then((status) => {
      // console.log("Initial, type: " + status.type + ", effectiveType: " + status.effectiveType);
      this.props.initNetworkConnection(status);
    });
    NetInfo.addEventListener("connectionChange", this.handleNetworkConnection);
  }

  componentDidMount() {
    // RootNavigation.router.getStateForAction = (action, state) => {
    // MainTab.router.getStateForAction = (action, state) => {
    //   if(action.type === 'Navigation/NAVIGATE' && state.routes && action.routeName === state.routes[state.routes.length - 1].routeName) return false;
    //   return prevGetStateForAction(action, state);
    // };
  }

  componentWillUnmount() {
    NetInfo.removeEventListener("connectionChange", this.handleNetworkConnection);
  }

  handleNetworkConnection = (status) => {
    // console.log(status);
    this.props.changedNetworkConnection(status);

    // this.props.alertWithType(
    //   'warn',
    //   "Network Connection Change",
    //   "Network Connection status"
    // );
  };

  render() {
    return (<RootNavigation />);
    // return (<MainTab />);
  }
}

export default connect(null, actions)(connectAlert(AppNavigation));
