import React from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

const NumberBtn = (props) => {
  return (
    <TouchableWithoutFeedback onPressIn={props.playCell.bind(null, props.value)}>
      <View style={styles.container}>
        <Text style={styles.btn}>{props.value}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NumberBtn
