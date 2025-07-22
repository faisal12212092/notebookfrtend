import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  // Fetch all notes from backend
  const getNotes = async () => {
    const response = await fetch("https://notebookbackend-sfa8.onrender.com/api/notes/fetchallnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
  const response = await fetch("https://notebookbackend-sfa8.onrender.com/api/notes/addnotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({ title, description, tag }),
  });
  const note = await response.json();
  setNotes(notes.concat(note));
};
  // ...other note functions (addNote, deleteNote, etc.)...
const deleteNote = async (id) => {
  const response = await fetch(`https://notebookbackend-sfa8.onrender.com/api/notes/deletenote/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const result = await response.json();
  if (response.ok) {
    // Refresh notes from backend after delete
    getNotes();
  } else {
    alert(result.error || "Failed to delete note");
  }
};
const editNote = async (id, title, description, tag) => {
  await fetch(`https://notebookbackend-sfa8.onrender.com/api/notes/updatenote/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({ title, description, tag }),
  });
  setNotes(
    notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    )
  );
};

return (
  <noteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, editNote }}>
    {props.children}
  </noteContext.Provider>
);
}

export default NoteState;
