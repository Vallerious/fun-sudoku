import {combineReducers} from 'redux'
import * as _ from 'lodash'

import {SET_GENERATED_FIELD, SET_VISIBLE_FIELDS, SET_SELECTED_CELL, PLAY_SUDOKU_CELL, CLEAR_CELL, GIVE_HINT} from '../actions'
let originalSudokuBoard = []
let originalVisibleFields = []
let colorfulSeparationCells = {
  '0:3': 1, '1:3': 1, '2:3': 1, '3:3': 1, '4:3': 1, '5:3': 1, '6:3': 1, '7:3': 1, '8:3': 1,
  '0:4': 1, '1:4': 1, '2:4': 1, '3:4': 1, '4:4': 1, '5:4': 1, '6:4': 1, '7:4': 1, '8:4': 1,
  '0:5': 1, '1:5': 1, '2:5': 1, '3:5': 1, '4:5': 1, '5:5': 1, '6:5': 1, '7:5': 1, '8:5': 1,
  '3:0': 1, '3:1': 1, '3:2': 1, '4:0': 1, '4:1': 1, '4:2': 1, '5:0': 1, '5:1': 1, '5:2': 1,
  '3:6': 1, '3:7': 1, '3:8': 1, '4:6': 1, '4:7': 1, '4:8': 1, '5:6': 1, '5:7': 1, '5:8': 1,
}

let defaultState= {
  fullSudokuField: [],
  visibleFields: {},
  selectedCell: {},
  colorfulSeparationCells
}

const reducer = (state = defaultState, action) => {
  let key = `${state.selectedCell.r}:${state.selectedCell.c}`
  switch (action.type) {
    case SET_GENERATED_FIELD:
      originalSudokuBoard = Object.assign([], action.data);
      return Object.assign({}, state, {
        fullSudokuField: action.data
      })
    case SET_VISIBLE_FIELDS:
      originalVisibleFields = _.cloneDeep(action.data)
      return Object.assign({}, state, {
        visibleFields: action.data
      })
    case SET_SELECTED_CELL:
      return Object.assign({}, state, {
        selectedCell: action.data
      })
    case PLAY_SUDOKU_CELL:
      let newSudokuField = _.cloneDeep(state.fullSudokuField)
      let visibleFields = _.cloneDeep(state.visibleFields)
      if (!_.isEmpty(state.selectedCell)) {
        const targetSudokuField = state.visibleFields[`${state.selectedCell.r}:${state.selectedCell.c}`]
        if (!targetSudokuField || (targetSudokuField && !originalVisibleFields[`${state.selectedCell.r}:${state.selectedCell.c}`])) {
          newSudokuField[+state.selectedCell.r][state.selectedCell.c] = action.value
          visibleFields[`${state.selectedCell.r}:${state.selectedCell.c}`] = 1
        }
      }

      return Object.assign({}, state, {
        fullSudokuField: newSudokuField,
        visibleFields
      })
    case CLEAR_CELL:
      // Check if cell is from the original cells - if it is - do not clear it
      if (!(key in originalVisibleFields) && !_.isEmpty(state.selectedCell)) {
        const newVisibleFields = _.cloneDeep(state.visibleFields)
        const newSudokuBoard = _.cloneDeep(state.fullSudokuField)
        delete newVisibleFields[key]
        newSudokuBoard[state.selectedCell.r][state.selectedCell.c] = originalSudokuBoard[state.selectedCell.r][state.selectedCell.c]

        return Object.assign({}, state, {
          visibleFields: newVisibleFields,
          fullSudokuField: newSudokuBoard
        })
      } else {
        return state;
      }
    case GIVE_HINT:
      if (!(key in originalVisibleFields)) {
        const newVisibleFields = _.cloneDeep(state.visibleFields)
        const newSudokuBoard = _.cloneDeep(state.fullSudokuField)
        newVisibleFields[key] = 1
        originalVisibleFields[`${state.selectedCell.r}:${state.selectedCell.c}`] = 1
        return Object.assign({}, state, {
          visibleFields: newVisibleFields,
          fullSudokuField: newSudokuBoard
        })
      } else {
        return state;
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
