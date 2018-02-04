import React from 'react'
import {Text} from 'react-native'
import styles from './styles'

const NumberBtn = (props) => {
  return (
    <Text style={styles.btn}>{props.value}</Text>
  )
}

export default NumberBtn
