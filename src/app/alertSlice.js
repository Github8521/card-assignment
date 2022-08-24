import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alert: null
}

export const apiSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alert = action.payload
    }

  },

})
export const { setAlert } = apiSlice.actions

export default apiSlice.reducer


export function showAlert(message, type) {
  return async function getNotesThunk(dispach, getstate) {
    dispach(setAlert({ message, type }))
    setTimeout(() => {
      dispach(setAlert(null))

    }, 1500);

  }
}

