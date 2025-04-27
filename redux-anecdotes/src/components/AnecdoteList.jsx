import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {

  const containerStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '15px',
    backgroundColor: '#f9f9f9',
    maxWidth: '50vw',
    wordWrap: 'break-word',
  }

  const contentStyle = {
    marginBottom: '5px',
    fontSize: '1.1rem',
    maxWidth: '50vw',
    wordWrap: 'break-word',
  }
  

  const votesStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95rem',
  }

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {anecdote.content}
      </div>
      <div style={votesStyle}>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

Anecdote.propTypes = {
  handleClick: PropTypes.func.isRequired,
  anecdote: PropTypes.shape({
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => 
        [...state.anecdotes].sort((a, b) => b.votes - a.votes)
    )

    const filtteri = useSelector(state => state.filter)

    let filteredAnecdotes = anecdotes

    if (filtteri && filtteri !== 'NOT_SET') {
      filteredAnecdotes = anecdotes.filter(item =>
        item.content.toLowerCase().includes(filtteri.toLowerCase())
      )
    }
      return (
        <div>
          <h2>Anecdotes</h2>
          {filteredAnecdotes.map(anecdote => (
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() =>
                {
                  dispatch(voteAnecdote(anecdote.id))
                  dispatch(setNotificationWithTimeout(`${anecdote.content} voted succesfully`))
                }
              }
            />
          ))}
        </div>
      )

}

export default AnecdoteList