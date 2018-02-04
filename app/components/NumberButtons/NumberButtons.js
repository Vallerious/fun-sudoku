import React from 'react'
import {View} from 'react-native'
import NumberBtn from '../NumberBtn'
import styles from './styles'
const NumberButtons = (props) => {
  return (
    <View style={styles.container}>
      {[1,2,3,4,5,6,7,8,9].map((n, i) => <NumberBtn key={i} value={n} playCell={props.playCell}/>)}
    </View>
  )
}

export default NumberButtons
