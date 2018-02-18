import React from 'react'
const {
  View,
  Text
} = require('react-native');
import SudokuCell from '../SudokuCell'

const SudokuRow = (props) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {props.squares.map((rs, idx) =>
        <SudokuCell
          key={idx}
          value={rs}
          row={props.rowIdx}
          col={idx}
          visibleFields={props.visibleFields}
          selectedCell={props.selectedCell}
          selectCell={props.selectCell}
          colorfulSeparationCells={props.colorfulSeparationCells}
          originalVisibleFields={props.originalVisibleFields}
        />
        )}
    </View>
  )
}

export default SudokuRow
