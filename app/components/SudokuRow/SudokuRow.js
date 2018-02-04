import React from 'react'
const {
  View,
  Text
} = require('react-native');
import SudokuCell from '../SudokuCell'

const SudokuRow = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {props.squares.map((rs, idx) => <SudokuCell key={idx} value={rs} />)}
    </View>
  )
}

export default SudokuRow
