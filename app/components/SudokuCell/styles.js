import {StyleSheet, Dimensions} from 'react-native'

export default styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: Dimensions.get('window').width / 9 - (2 * (0.01 * Dimensions.get('window').width)),
    textAlign: 'center',
    justifyContent: 'center'
  },
  cellText: {
    textAlign: "center",
    fontSize: 25
  }
})
