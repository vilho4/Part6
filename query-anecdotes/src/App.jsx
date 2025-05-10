import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useReducer } from 'react'
// import axios from 'axios'
// import { getAnecdotes, createAnecdote } from './requests'
import { getAnecdotes, updateAnecdote } from './requests'
import Notification from './components/Notification'
import { useContext } from 'react'
import NotificationContext from './NotificationContext'

import AnecdoteForm from './components/AnecdoteForm'
// import Notification from './components/Notification'

const App = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation( //highligh-line
    {mutationFn: updateAnecdote,    
      onSuccess: () => { // highligh-line
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })    
    },
  })

  const handleVote = (anecdote) => {
    console.log('vote')
    console.log(anecdote)
    updateAnecdoteMutation.mutate({...anecdote, votes:anecdote.votes+1})
    notificationDispatch({ type: 'SET', 
      payload: {
        message: `${anecdote.content} voted successfully`,
        type: 'success'
      }
    })
  }

  const result = useQuery({
      queryKey: ['anecdotes'],
      queryFn: getAnecdotes,
      retry: 3
  })
  console.log(JSON.parse(JSON.stringify(result)))

  if ( result.isLoading ) {
    return <div>anecdote service not availabe due to problems</div>
  }

  // const anecdotes=result.data

  const anecdotes = [...result.data].sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
