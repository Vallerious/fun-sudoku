import {combineReducers} from 'redux'

import {SET_GENERATED_FIELD, SET_VISIBLE_FIELDS} from '../actions'

let defaultState= {
  fullSudokuField: [],
  visibleFields: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_GENERATED_FIELD:
      return Object.assign({}, state, {
        fullSudokuField: action.data
      })
    case SET_VISIBLE_FIELDS:
      return Object.assign({}, state, {
        visibleFields: action.data
      })
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
