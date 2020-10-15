import {
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from './types'

const initialState = {
  loading: false,
  characters: [],
  error: ''
}

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
        error: ''
      }
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        characters: [],
        error: action.payload
      }
    default:
      return state;
  }
}
