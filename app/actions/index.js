export const SET_GENERATED_FIELD = 'SET_GENERATED_FIELD'
export const SET_VISIBLE_FIELDS = 'SET_VISIBLE_FIELDS'

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
