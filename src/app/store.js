import { configureStore } from '@reduxjs/toolkit'
import alertSlice from './alertSlice'

import apiReducer from './ApiSlice'

export const store = configureStore({
  reducer: {
    api:apiReducer,
    alert:alertSlice
  },
})