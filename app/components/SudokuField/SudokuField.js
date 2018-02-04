import React, { Component } from 'react';
const {
  ListView,
  View,
  Text
} = require('react-native');
import SudokuRow from '../SudokuRow'

export default class SudokuField extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds
    }
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.fullSudokuField)}
          renderRow={rowSquares => <SudokuRow squares={rowSquares} />}
        />
      </View>
    );
  }
}
