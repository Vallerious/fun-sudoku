import React from 'react'
const { View, Text, StyleSheet } = require('react-native');
import styles from './styles'

const SudokuCell = (props) => {
  const rowColKey = `${props.row}:${props.col}`
  return (
    <View style={styles.cell}>
      <Text style={StyleSheet.flatten([styles.cellText, {opacity: rowColKey in props.visibleFields ? 1 : 0}])}>{props.value}</Text>
    </View>
  )
}

export default SudokuCell
