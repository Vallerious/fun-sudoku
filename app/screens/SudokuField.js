import React from 'react'
import {Text} from 'react-native'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import sudokuGenerator from '../lib/sudokuGenerator'

class SudokuField extends React.Component {
  componentWillMount() {
    this.props.setSudokuField(sudokuGenerator.generateSudoku().map(sq => sq.Value))
  }

  render () {
    return (<Text>Hello from sudoku field {JSON.stringify(this.props.fullSudokuField)}</Text>)
  }
}

function mapStateToProps(state, props) {
  return {
    fullSudokuField: state.reducer.fullSudokuField
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SudokuField);
