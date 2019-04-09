import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

import CustomIcon from '../../icons/CustomIcon';
import { myUid } from '../../utils/firestoreUtils';
import Colors from '../../constants/Colors';
import styles from './styles';


class TabIcon extends Component {
  state = {
    unreadCount: 0
  }

  constructor(props) {
    super(props);
 
    if (this.props.tabName === 'chattingRoom') {
      this.getUnreadCount(this.props.chatRooms).then(
        val => {
          this.setState({
            unreadCount: val
          });
        }
      )
    }
  }

  getUnreadCount = async (chatRooms) => {
    let totalCount = 0;

    for(var i=0; i<chatRooms.length; i++ ){
      let room = chatRooms[i];
      let QuerySnap = await firebase
        .firestore()
        .collection("chatRooms")
        .doc(room.uid)
        .collection("messages")
        .where(myUid(), "==", "unreader")
        .get()

      QuerySnap.empty ? 
        unreadCount = 0 :
        unreadCount = QuerySnap.size;
        
      totalCount = totalCount + unreadCount;
    }
     return totalCount;
  }

  renderBadge(badgeCount) {
    if (badgeCount && badgeCount !== "0") {
      const width = badgeCount.length;
      const badgeContainer = Platform.OS === "android" ? [styles.badgeContainerAndroid] : [styles.badgeContainer];
      if (width > 1) {
        badgeContainer.push({ width: width * 8 });
      }
      const badgeText = Platform.OS === "android" ? [styles.badgeTextAndroid] : [styles.badgeText];
      return (
        <View style={badgeContainer}>
          <Text style={badgeText}>{this.state.unreadCount}</Text>
        </View>
      );
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    const { tabName } = this.props;

    if (tabName === "friends") {
      if (this.props.requests && this.props.requests !== nextProps.requests) {
        this.setState({ unreadCount: nextProps.requests.length });
      }
    }
    if (tabName === "chattingRoom") {
      if (this.props.chatRooms && this.props.chatRooms !== nextProps.chatRooms) {
        const { chatRooms } = nextProps;
        const unreadCount = chatRooms.reduce((prev, chatRoom) => {
          return prev + chatRoom.unreadCount;
        }, 0);
        firebase.notifications().setBadge(unreadCount || 0);
        this.setState({ unreadCount });
      }
    }
  }

  render() {
    const { focused } = this.props;

    return (
      <View style={Platform.OS === "android" ? styles.containerAndroid : styles.container}>
        <CustomIcon
          name={`${this.props.iconName}`}
          size={30}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
        {this.renderBadge(this.state.unreadCount)}
      </View>
    );
  }
}

function mapStateToProps({ requests, chatRooms }) {
  return {
    requests,
    chatRooms
  };
}

export default connect(mapStateToProps, null)(TabIcon);
