import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
      console.log(JSON.stringify(anecdoteToVote, null, 2))
      if (anecdoteToVote) {

        console.log(anecdoteToVote.id,'votetesti')
        anecdoteToVote.votes += 1
      }
    },

    // createAnecdote(state, action) {
    //   state.push(action.payload)
    // },

    appendAnecdote(state, action) {
      state.push(action.payload)    
    },

    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const updateAnecdote = id => {
  return async dispatch => {
    const testi = await anecdoteService.update(id)
    dispatch(voteAnecdote(testi))
  }
}


export default anecdoteSlice.reducer
