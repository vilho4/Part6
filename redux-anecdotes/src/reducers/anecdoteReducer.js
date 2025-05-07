import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {

    voteAnecdote(state, action) {
      const id = action.payload.id
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes = action.payload.votes
      }
    },

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

export const updateAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const testi = await anecdoteService.update(updatedAnecdote)
    console.log(testi)
    dispatch(voteAnecdote(testi))
  }
}


export default anecdoteSlice.reducer
