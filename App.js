/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SudokuField from './app/screens/SudokuField'

import { Provider } from 'react-redux'
import store from './app/store'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <SudokuField />
      </Provider>
    );
  }
}
