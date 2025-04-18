const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  // console.log(state, 'state')
  // console.log(initialState, 'intialstate')
  // console.log(action, 'action')
  switch (action.type) {
    case 'GOOD':
      return state = { ...state, good: state.good + 1 }
    case 'OK':
      return state = { ...state, ok: state.ok + 1 }
    case 'BAD':
      return state = { ...state, bad: state.bad + 1 }
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer
