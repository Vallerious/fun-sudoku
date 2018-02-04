import React, { Component } from 'react';
const {
  ListView,
  View,
  Text
} = require('react-native');
import SudokuRow from '../SudokuRow'
import styles from './styles'

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
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.fullSudokuField)}
          renderRow={(rowSquares, sectionId, rowId) => <SudokuRow squares={rowSquares} rowIdx={rowId} visibleFields={this.props.visibleFields}/>}
        />
      </View>
    );
  }
}
