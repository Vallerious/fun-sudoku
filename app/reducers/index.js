import {combineReducers} from 'redux'

import {SET_GENERATED_FIELD} from '../actions'

let defaultState= {
  fullSudokuField: [],
  shownSudokuFields: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_GENERATED_FIELD:
      return Object.assign({}, state, {
        fullSudokuField: action.data
      })
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
