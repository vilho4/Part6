import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.anecdote.value
    // console.log(newAnecdote)
    event.target.anecdote.value = ''
    dispatch(createAnecdote(newAnecdote))
    dispatch(setNotificationWithTimeout(`You've created a new anecdote: "${newAnecdote}"`))

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