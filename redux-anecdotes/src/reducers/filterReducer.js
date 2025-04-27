import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'NOT_SET',
    reducers: {
        setFilter(state, action) {
            return action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer

// const filterReducer = (state = 'NOT_SET', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
//           return action.payload
//         default:
//           return state
//       }
//   }
  
//   export const filterChange = filter => {
//     return {
//       type: 'SET_FILTER',
//       payload: filter,
//     }
//   }
  
//   export default filterReducer