import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(anecdoteContent))
    dispatch(setNotificationWithTimeout(`You've created a new anecdote: "${anecdoteContent}"`))

  }

  return (
    <div>
    <h2>Create new</h2>
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button>create</button>
    </form>
  </div>
  )
}


export default AnecdoteForm