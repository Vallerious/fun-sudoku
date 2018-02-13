import React from 'react'
import {View} from 'react-native'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import sudokuGenerator from '../lib/sudokuGenerator'
import * as _ from 'lodash'
import SudokuField from '../components/SudokuField'
import NumberButtons from '../components/NumberButtons'
import ActionBar from '../components/ActionBar'

class Sudoku extends React.Component {
  componentWillMount() {
    this.props.setSudokuField(_.chunk(sudokuGenerator.generateSudoku().map(sq => sq.Value), 9))
    this.props.setVisibleFields(sudokuGenerator.getVisibleCells())
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <SudokuField
          fullSudokuField={this.props.fullSudokuField}
          visibleFields={this.props.visibleFields}
          selectedCell={this.props.selectedCell}
          selectCell={this.props.setSelectedCell}
          colorfulSeparationCells={this.props.colorfulSeparationCells}
          />
        <ActionBar clearCell={this.props.clearCell} giveHint={this.props.giveHint} />
        <NumberButtons playCell={this.props.playCell}/>
      </View>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    fullSudokuField: state.reducer.fullSudokuField,
    visibleFields: state.reducer.visibleFields,
    selectedCell: state.reducer.selectedCell,
    colorfulSeparationCells: state.reducer.colorfulSeparationCells
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);
