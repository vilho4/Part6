import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import NotificationContext from '../NotificationContext'

import { getAnecdotes, createAnecdote } from '../requests'

const AnecdoteForm = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content.length < 5) {
      notificationDispatch({
        type: 'SET',
        payload: {
          message: 'Anekdootin pitää olla vähintään 5 merkkiä pitkä',
          type: 'error'
        }
      })
      return
    }
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, id:(Math.random() * 1000000).toFixed(0), votes: 0})
    notificationDispatch({ type: 'SET', 
      payload: {
        message: `${content} created`,
        type: 'success'
      }
    })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
