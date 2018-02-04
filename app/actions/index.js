export const SET_GENERATED_FIELD = 'SET_GENERATED_FIELD'

export const setSudokuField = squares => dispatch => {
  dispatch({
    type: SET_GENERATED_FIELD,
    data: squares
  })
}
