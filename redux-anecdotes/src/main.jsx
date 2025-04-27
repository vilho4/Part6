import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'


import App from './App'
import anecdoteSlice from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer}
// )

// const store = createStore(reducer)
const store = configureStore({  
  reducer: {    
    anecdotes: anecdoteSlice,    
    filter: filterSlice,
    notification: notificationReducer
  }})


console.log(store.getState())

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <div />
//   </Provider>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)