import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input, Item } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const ICON_COLOR = "#868686";
const ICON_SIZE = 22;

export default class Dialog extends Component {
  static defaultProps = {
    bottomLeftLabel: "OK"
  };
  confirmBtn = () => {
    this.props.rightBtn(this.props.text);
    this.props.initText();
  };
  _rightBtn = () => {
    let self = this;
    self.props.type === "transfer" || self.props.type === "friendTransfer"
      ? self.props.openConfirmModal(self.props.text, self.state.amount)
      : self.props.importAddress(self.props.text, self.state.amount);
    self.setState({ amount: "" });
    self.props.initText();
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amount: ""
    };
    this.lastAppState = "";
  }

  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => this.props.onClose()}
      >
        <View style={styles.cont}>
          <View style={[styles.cont2, { height: this.props.height }]}>
            <View style={styles.top}>
              <View />
              <Text style={styles.title}>{this.props.title}</Text>
              <View />
            </View>

            <View style={styles.body}>
              <View style={{ width: 270 }}>
                {this.props.type !== "friendTransfer" && (
                  <Item rounded style={styles.inputGrp}>
                    <Ionicons name={this.props.icon} color={ICON_COLOR} size={ICON_SIZE} style={{ marginLeft: 15 }} />
                    <Input
                      placeholder={this.props.placeholder}
                      style={styles.input}
                      onChangeText={text => this.props.dialogTextChange(text)}
                      placeholderTextColor="#adadad"
                      value={this.props.text}
                      secureTextEntry={
                        this.props.type === "confirm" || this.props.type === "confirmPrivateKey" ? true : false
                      }
                    />
                  </Item>
                )}
              </View>
              {this.props.type === "transfer" || this.props.type === "friendTransfer" ? (
                <View style={{ width: 270 }}>
                  <Item rounded style={styles.inputGrp}>
                    <Text style={{ fontSize: ICON_SIZE, marginLeft: 15, color: ICON_COLOR, fontWeight: "500" }}>Ξ</Text>
                    <Input
                      placeholder={"Amount(default value 0)"}
                      style={styles.input}
                      onChangeText={amount => this.setState({ amount })}
                      placeholderTextColor="#adadad"
                      value={`${this.state.amount}`}
                      keyboardType="numeric"
                    />
                  </Item>
                </View>
              ) : (
                <View />
              )}
              {this.props.type === "confirmPrivateKey" ? (
                <View style={{ width: 270 }}>
                  <Item rounded style={styles.inputGrp}>
                    <Ionicons name={this.props.icon} color={ICON_COLOR} size={ICON_SIZE} style={{ marginLeft: 15 }} />
                    <Input
                      placeholder={"Password"}
                      style={styles.input}
                      onChangeText={amount => this.setState({ amount })}
                      placeholderTextColor="#adadad"
                      value={`${this.state.amount}`}
                      secureTextEntry={this.props.type === "confirmPrivateKey" ? true : false}
                    />
                  </Item>
                </View>
              ) : (
                <View />
              )}
            </View>

            <View style={styles.bottom}>
              <TouchableOpacity
                style={[styles.btn, { borderRightWidth: 1 }]}
                onPress={() => {
                  this.props.onClose();
                  this.setState({ amount: "", text: "" });
                }}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, styles.clear]}
                onPress={() =>
                  this.props.type === "transfer" ||
                  this.props.type === "friendTransfer" ||
                  this.props.type === "confirmPrivateKey"
                    ? this._rightBtn()
                    : this.confirmBtn()
                }
              >
                <Text style={styles.btnText}>{this.props.bottomRightLabel}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

let ELEMENT_WIDTH = 300;
let PADDING = 10;
const styles = StyleSheet.create({
  cont: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000088"
  },

  cont2: {
    borderRadius: 10,
    width: ELEMENT_WIDTH + PADDING,
    backgroundColor: "transparent"
  },

  top: {
    height: 50,
    padding: PADDING,
    width: ELEMENT_WIDTH,
    backgroundColor: "#2e3032",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    borderTopRightRadius: PADDING,
    borderTopLeftRadius: PADDING
  },

  body: {
    width: ELEMENT_WIDTH,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#2e3032",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1
  },

  bottom: {
    width: ELEMENT_WIDTH,
    height: 50,
    paddingBottom: PADDING,
    flexDirection: "row",
    alignSelf: "center",
    borderBottomRightRadius: PADDING,
    borderBottomLeftRadius: PADDING,
    backgroundColor: "#2e3032"
  },

  title: {
    color: "#adadad",
    fontSize: 15,
    fontWeight: "bold"
  },

  closeBtn: {
    top: 20,
    right: 17,
    width: 18,
    height: 18
  },

  btn: {
    flex: 1,
    backgroundColor: "#2e3032",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#cccccc",
    marginTop: PADDING
  },

  clear: {
    borderRightWidth: 0
  },

  btnText: {
    color: "#adadad",
    fontSize: 14,
    lineHeight: 16
  },

  inputGrp: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    borderWidth: 0,
    borderColor: "transparent"
  },
  input: {
    paddingLeft: 10,
    color: "#adadad"
  },

  label: {
    fontSize: 14,
    color: "#2e3032",
    margin: 10
  }
});
