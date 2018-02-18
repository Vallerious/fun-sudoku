import React from 'react'
import {View, Alert} from 'react-native'
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
    this.handleInitFields()
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.visibleFields).length >= 81) {
      this.props.checkGame()
    }

    if (nextProps.gameCompleted === true) {
      Alert.alert(
        'You have solved the sudoku!',
        'Congratulations !!',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'New Game', onPress: () => this.handleNewGame()},
        ]
      )
    }
  }

  handleInitFields() {
    this.props.setSudokuField(_.chunk(sudokuGenerator.generateSudoku().map(sq => sq.Value), 9))
    this.props.setVisibleFields(sudokuGenerator.getVisibleCells())
  }

  handleNewGame() {
    this.props.newGame()
    this.handleInitFields()
  }

  render () {
    return (
      <View style={{flex: 1, paddingLeft: '2%', paddingRight: '2%'}}>
        <SudokuField
          fullSudokuField={this.props.fullSudokuField}
          visibleFields={this.props.visibleFields}
          selectedCell={this.props.selectedCell}
          selectCell={this.props.setSelectedCell}
          colorfulSeparationCells={this.props.colorfulSeparationCells}
          originalVisibleFields={this.props.originalVisibleFields}
          />
        <ActionBar clearCell={this.props.clearCell} giveHint={this.props.giveHint} hintsLeft={this.props.hintsLeft} />
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
    colorfulSeparationCells: state.reducer.colorfulSeparationCells,
    hintsLeft: state.reducer.hintsLeft,
    originalVisibleFields: state.reducer.originalVisibleFields,
    gameCompleted: state.reducer.gameCompleted
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);
