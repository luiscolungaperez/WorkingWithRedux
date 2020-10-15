import axios from 'axios'
import {
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from './types'

const fetchCharacterRequest = () => {
  return {
    type: REQUEST_LOADING
  }
}

const fetchCharacterSuccess = (payload) => {
  return {
    type: REQUEST_SUCCESS,
    payload
  }
}

const fetchCharacterFailure = (payload) => {
  return {
    type: REQUEST_FAILURE,
    payload
  }
}

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharacterRequest());
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => dispatch(fetchCharacterSuccess(response.data.results)))
      .catch((error) => dispatch(fetchCharacterFailure(error.message)))
  };
};