import { createSlice } from '@reduxjs/toolkit'
export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
})

const initialState = {
  data: [],
  status: null
}

const host = 'http://localhost:8000'

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    },
    addData(state, action) {
      state.data.push(action.payload)
    },
    deleteData(state, action) {
      state.data.filter((arrow) => arrow.id !== action.payload)
    }
  },


})
export const { setData, setStatus, addData, deleteData } = apiSlice.actions

export default apiSlice.reducer


// 


export function getNotes() {
  return async function getNotesThunk(dispach, getstate) {
    dispach(setStatus(STATUSES.LOADING))
    try {
      const response = await fetch(`${host}/getcard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json()
      dispach(setData(data))
      dispach(setStatus(STATUSES.IDLE))
    } catch (error) {
      console.log(error);
      dispach(setStatus(STATUSES.ERROR))
    }
  }
}




export function addNote(cardName, projectBudjet, projectendDate) {
  return async function getNotesThunk(dispach, getstate) {
    dispach(setStatus(STATUSES.LOADING))
    try {
      const response = await fetch(`${host}/getcard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ cardName, projectBudjet, projectendDate })
      });
      const note = await response.json();
      if (note.success === true) {

        dispach(addData(note.responce))
        dispach(setStatus(STATUSES.IDLE))
      }
      if (note.success === false) {
        dispach(setStatus(STATUSES.ERROR))
      }
    } catch (error) {
      console.log(error);
      dispach(setStatus(STATUSES.ERROR))
    }
  }
}



export function deleteNote(id) {
  return async function getNotesThunk(dispach, getstate) {
    dispach(setStatus(STATUSES.LOADING))
    try {
      await fetch(`${host}/getcard/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',


        },

      });

      dispach(getNotes())
      dispach(setStatus(STATUSES.IDLE))


    } catch (error) {
      console.log(error);
      dispach(setStatus(STATUSES.ERROR))

    }

  }
}



export function editNote(id, cardName, projectBudjet, projectendDate) {
  return async function getNotesThunk(dispach, getstate) {
    dispach(setStatus(STATUSES.LOADING))
    try {
      const response = await fetch(`${host}/getcard/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',

        },

        body: JSON.stringify({ cardName, projectBudjet, projectendDate })
      });
      const json = await response.json();
      console.log(json);

      dispach(getNotes())
      dispach(setStatus(STATUSES.IDLE))


    } catch (error) {
      dispach(setStatus(STATUSES.ERROR))


    }

  }
}