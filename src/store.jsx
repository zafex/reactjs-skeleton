import { createStore, combineReducers } from 'redux'
import { common } from '~/common'

const reducer = combineReducers({
  common
  // add another reducers
})

export const store = createStore(reducer)
