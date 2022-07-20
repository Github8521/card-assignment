import React from 'react'
import { useContext } from 'react'
import NoteContex from '../context/notes/NoteContex'

const NoteItem = (props) => {
  const {note,updateNote,copyCard}=props
  const context=useContext(NoteContex)
  const{deleteNote}=context
  return (
    <div  className='col-md-6 my-3 '>
       <div className="card " style={{backgroundColor:' #a6caf1',borderRadius:'20px',fontSize:'20px',width:'500px'}}>
  <div className="card-body">
    <div className="d-flex align-items-center">

    <h5 className="card-title">Card Name:{note.cardName}</h5>
    </div>
    <h5 className="card-text">Bard Budjet:{note.projectBudjet}.</h5>
    <h5 className="card-text d-flex">Card End Date: <div style={{backgroundColor:'white'}}>{note.projectendDate}.</div></h5>
    <div style={{height:'2px',backgroundColor:'red'}}></div>
    </div>
    <div  className='d-flex'>
   <div className='mx-3' style={{cursor:'pointer'}} onClick={()=>{updateNote(note)}}>Edit Card</div>
   <div className='mx-4'style={{cursor:'pointer'}}  onClick={()=>{deleteNote(note._id);props.showAlert('deleted successfully','success')}} >Delete Card</div>
   <div className='mx-4'style={{cursor:'pointer'}} onClick={copyCard}>Copy Card</div>
  </div>
</div>
    </div>
  )
}

export default NoteItem
