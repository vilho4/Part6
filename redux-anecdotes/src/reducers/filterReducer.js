const filterReducer = (state = 'NOT_SET', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            console.log(action.payload, 'reduceri')
          return action.payload
        default:
          return state
      }
  }
  
  export const filterChange = filter => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    }
  }
  
  export default filterReducer