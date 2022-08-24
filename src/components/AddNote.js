import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../app/ApiSlice'


const AddNote = () => {

  const dispach = useDispatch()

  const [note, setNote] = useState({ cardName: '', projectBudjet: '', projectendDate: '' })


  const handlechange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleclick = (e) => {
    e.preventDefault()
    dispach(addNote(note.cardName, note.projectBudjet, note.projectendDate))
    setNote({ cardName: '', projectBudjet: '', projectendDate: '' })

  }
  return (
    <div className="container my-3">
      <h1 className='text-center'>Add a card</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">Card Name</label>
          <input type="text" className="form-control" id="cardName" name='cardName' aria-describedby="emailHelp" value={note.cardName} onChange={handlechange} />
        </div>
        <div className="mb-3">
          <label htmlFor="projectBudjet" className="form-label">Project Budjet</label>
          <input type="number" className="form-control" id="projectBudjet" value={note.projectBudjet} name='projectBudjet' onChange={handlechange} />
        </div>
        <div className="mb-3">
          <label htmlFor="projectendDate" className="form-label">Project End Date</label>
          <input type="date" className="form-control" id="projectendDate" name='projectendDate' value={note.projectendDate} onChange={handlechange} />
        </div>

        <button type="submit" onClick={handleclick} className="btn btn-primary">Add Card</button>
      </form>
    </div>
  )
}

export default AddNote
