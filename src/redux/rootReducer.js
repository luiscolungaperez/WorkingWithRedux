import { combineReducers } from 'redux'
import { characterReducer } from './Characters/reducers'

export const rootReducer = combineReducers({
  characters: characterReducer
})
