import React from 'react'
import NoteContex from '../context/notes/NoteContex'
import { useContext,useRef } from 'react'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { useEffect,useState } from 'react'
// import {  useNavigate } from 'react-router-dom'




const Notes = (props) => {
  // let navigate=useNavigate()

    const context=useContext(NoteContex)
    const{notes,getNotes,editNote}=context

    useEffect(()=>{

        getNotes()
    
      // eslint-disable-next-line
    },[])


  const[note,setNote]= useState({id:'', ecardName:'',eprojectBudjet:'',eprojectendDate:''})

    const ref=useRef(null)
    const refClose=useRef(null)


    const updateNote=(currentNote)=>{
    ref.current.click()
    setNote({id:currentNote._id, ecardName:currentNote.cardName,eprojectBudjet:currentNote.projectBudjet,eprojectendDate:currentNote.projectendDate})
    }


    const handlechange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
      // iska matlab jo v change ho raha hai uska name uski value k barabar ho jaye
  }

  const handleclick=(e)=>{
    // e.preventDefault()
    editNote(note.id,note.ecardName,note.eprojectBudjet,note.eprojectendDate)
    refClose.current.click()

    console.log('updating note...',note);
    props.showAlert('updated successfully','success')

}
const handlecopy=()=>{
    navigator.clipboard.writeText(note)
    props.showAlert('text copied','success')

}
 

  return (
    <>
    <AddNote showAlert={props.showAlert}/>
    
<button type="button" className="btn btn-primary d-none"  ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit card</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">



      <form>
  <div className="mb-3">
    <label htmlFor="ecardName" className="form-label">card name</label>
    <input type="text" className="form-control" id="ecardName" value={note.ecardName} name='ecardName' aria-describedby="emailHelp" onChange={handlechange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="eprojectBudjet" className="form-label">project budjet</label>
    <input type="number" className="form-control" id="eprojectBudjet" value={note.eprojectBudjet} name='eprojectBudjet' onChange={handlechange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="eprojectendDate" className="form-label">project end date</label>
    <input type="date" className="form-control" id="eprojectendDate" name='eprojectendDate' value={note.eprojectendDate} onChange={handlechange}/>
  </div>
 
</form>




      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.ecardName.length<4 || note.eprojectBudjet.length<5} type="button" onClick={handleclick} className="btn btn-primary">Update card</button>
      </div>
    </div>
  </div>
</div>

    <div className="row my-3">
    <div style={{backgroundColor:'#a6caf1', height:'70px',textAlign:'center',borderRadius:'20px'}}>
     < h4 className='my-3'>Total Project={notes.length}</h4>
    </div>
    <div className="container">
    {notes.length===0&&'nothing in cards'}
    </div>
   
    {notes.map((note)=>{
     return <NoteItem showAlert={props.showAlert} key={note._id} updateNote={updateNote} copyCard={handlecopy}  note={note}/>
    })}
    </div>
    </>
  )
}

export default Notes
