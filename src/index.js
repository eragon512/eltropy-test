import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import itemReducer from './reducers/itemReducer'
import searchReducer from './reducers/searchReducer'
import App from './components/App'

import './main.css'

const reducer = combineReducers({
  items: itemReducer,
  search: searchReducer,
})

const store = createStore(
  reducer,
  JSON.parse(window.localStorage.getItem('state') || "[]"),
)

store.subscribe(() => window.localStorage.setItem('state', JSON.stringify(store.getState())))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)