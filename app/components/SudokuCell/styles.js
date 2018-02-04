import {StyleSheet} from 'react-native'
const cellDimentions = 40;

export default styles = StyleSheet.create({
  cell: {
    width: cellDimentions,
    height:cellDimentions,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  cellText: {
    lineHeight: cellDimentions,
    textAlign: "center",
    fontSize: 25
  }
})
