import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        event.preventDefault()
        const searchTerm = event.target.value
        dispatch(filterChange(searchTerm))
    }

    const style = {
        marginBottom: 10,
        marginTop: 10,
        fontSize: '1rem',
    }

    const inputStyle = {
        padding: '5px',
        fontSize: '1rem',
        marginLeft: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    }

    return (
    <div style={style}>
        filter 
        <input
        onChange={handleChange}
        style={inputStyle}
        />
    </div>
    )
  }
  
  export default Filter