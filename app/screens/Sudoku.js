import React from 'react'
import {View} from 'react-native'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import sudokuGenerator from '../lib/sudokuGenerator'
import * as _ from 'lodash'
import SudokuField from '../components/SudokuField'
import NumberButtons from '../components/NumberButtons'

class Sudoku extends React.Component {
  componentWillMount() {
    this.props.setSudokuField(_.chunk(sudokuGenerator.generateSudoku().map(sq => sq.Value), 9))
    this.props.setVisibleFields(sudokuGenerator.getVisibleCells())
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <SudokuField fullSudokuField={this.props.fullSudokuField} visibleFields={this.props.visibleFields} />
        <NumberButtons />
      </View>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    fullSudokuField: state.reducer.fullSudokuField,
    visibleFields: state.reducer.visibleFields
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);
