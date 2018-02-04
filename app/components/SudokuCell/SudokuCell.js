import React from 'react'
const { Text } = require('react-native');
import styles from './styles'

const SudokuCell = (props) => {
  return (
    <Text style={styles.cell}>{props.value}</Text>
  )
}

export default SudokuCell
