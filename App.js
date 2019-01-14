
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ShoppingCart from './ShoppingCart';
import {Provider} from 'react-redux';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
