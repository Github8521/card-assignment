import { useState } from "react";
import NoteContex from "./NoteContex";
const NoteState = (props) => {
  const host = 'http://localhost:8000'
  const initialnotes = []
  const [notes, setNotes] = useState(initialnotes)

  //  add note
  const addNote =async (cardName, projectBudjet, projectendDate) => {
    // api call 
    const response = await fetch(`${host}/getcard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        

      },

      body: JSON.stringify({cardName,projectBudjet,projectendDate})
    });
    const note= await response.json();
    setNotes(notes.concat(note))
  }
  //  get all note
  const getNotes =async () => {
    // api call 
    const response = await fetch(`${host}/getcard`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     
      }
    });
    const json=await response.json()
    console.log(json);
    setNotes(json)
 
  }


  //  delete note

  const deleteNote =async (id) => {
    // api call
    const response = await fetch(`${host}/getcard/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        

      },

    });
    const json=response.json()
    console.log(json);

    console.log('deleting the note with id' + id);
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
  }


  //  edit note
  const editNote = async(id, cardName, projectBudjet, projectendDate) => {
    // Api call (google-fech with headers)

    const response = await fetch(`${host}/getcard/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',

      },

      body: JSON.stringify({cardName,projectBudjet,projectendDate})
    });
    const json= await response.json();
    console.log(json);


let newNotes=JSON.parse(JSON.stringify(notes))
  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
 
    if (element._id === id) {
      newNotes[index].cardName = cardName
      newNotes[index].projectBudjet = projectBudjet
      newNotes[index].projectendDate = projectendDate
      break
    }

  }
  setNotes(newNotes)

}



return (
  <NoteContex.Provider value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes }}>

    {props.children}
  </NoteContex.Provider>
)
}

export default NoteState