import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './features/noteSlice'

const store = configureStore({
  reducer: {
    todos: noteReducer,
  },
})

export default store   
