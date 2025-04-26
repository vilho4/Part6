import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
      <div>
        {anecdote.content}
        <div>
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
        [...state].sort((a, b) => b.votes - a.votes)
    )

      return (
        <div>
          <h2>Anecdotes</h2>
          {anecdotes.map(anecdote => (
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() => dispatch(voteAnecdote(anecdote.id))}
            />
          ))}
        </div>
      )

}

export default AnecdoteList