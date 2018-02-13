import React from 'react'
import {View, TouchableWithoutFeedback, Text} from 'react-native'
import styles from './styles'

const ActionBar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={props.clearCell}>
          <Text style={styles.clearBtn}>Clear</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={props.giveHint}>
          <Text style={{textDecorationLine: "underline"}}>Hint</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default ActionBar
