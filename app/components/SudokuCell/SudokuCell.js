import React from 'react'
const { View, Text, StyleSheet, TouchableWithoutFeedback } = require('react-native');
import styles from './styles'

const SudokuCell = (props) => {
  const rowColKey = `${props.row}:${props.col}`
  return (
    <TouchableWithoutFeedback onPressIn={props.selectCell.bind(null, {r: props.row, c: props.col})}>
      <View style={StyleSheet.flatten([
        styles.cell,
        (props.selectedCell.r === props.row && props.selectedCell.c === props.col) ? {backgroundColor: '#F0F8FF'} : {},
        (`${props.row}:${props.col}` in props.colorfulSeparationCells) ? {backgroundColor: '#cccc00'} : {}
      ])}>
          <Text
            style={StyleSheet.flatten([styles.cellText, {
              opacity: rowColKey in props.visibleFields ? 1 : 0,
            }])}
          >{props.value}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SudokuCell
