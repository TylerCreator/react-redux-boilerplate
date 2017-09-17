import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

global.store = configureStore();

/* eslint-disable */
// Enable debugging network calls from inside Chrome Dev Tools.
// http://www.preslav.me/2017/03/26/debugging-network-calls-in-react-native-using-the-chrome-debugger/
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;
/* eslint-enable */

console.ignoredYellowBox = ["Remote debugger"];

class NiceRadio extends Component {
  render() {
    return (
      <Provider store={global.store}>
        <View style={{ flex: 1 }} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("NiceRadio", () => NiceRadio);
