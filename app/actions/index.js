export const SET_GENERATED_FIELD = 'SET_GENERATED_FIELD'
export const SET_VISIBLE_FIELDS = 'SET_VISIBLE_FIELDS'
export const SET_SELECTED_CELL = 'SET_SELECTED_CELL'
export const PLAY_SUDOKU_CELL = 'PLAY_SUDOKU_CELL'
export const CLEAR_CELL = 'CLEAR_CELL'
export const GIVE_HINT =  'GIVE_HINT'

export const setSudokuField = squares => dispatch => {
  dispatch({
    type: SET_GENERATED_FIELD,
    data: squares
  })
}

export const setVisibleFields = visibleFields => dispatch => {
  dispatch({
    type: SET_VISIBLE_FIELDS,
    data: visibleFields
  })
}

export const setSelectedCell = selectedCell => dispatch => {
  dispatch({
    type: SET_SELECTED_CELL,
    data: selectedCell
  })
}

export const playCell = cellValue => dispatch => {
  dispatch({
    type: PLAY_SUDOKU_CELL,
    value: cellValue
  })
}

export const clearCell = () => dispatch => {
  dispatch({
    type: CLEAR_CELL
  })
}

export const giveHint = () => dispatch => {
  dispatch({
    type: GIVE_HINT
  })
}
