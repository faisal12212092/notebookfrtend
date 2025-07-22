import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import "./Notes.css";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, addNote, deleteNote, editNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  useEffect(() => {
    getNotes();
  }, []);

  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-4 text-light" style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      <h2 className="text-center text-info mb-4 fw-bold">📝 Your Notes</h2>

      {/* Add Note Form */}
      <div className="card shadow border-0 mb-5" style={{ backgroundColor: "#1e1e2f", borderRadius: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title fw-bold text-info">Add a New Note</h5>
          <form onSubmit={handleAddNote}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Title"
                name="title"
                value={note.title}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-dark text-white border-secondary"
                placeholder="Description"
                name="description"
                value={note.description}
                onChange={onChange}
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Tag (optional)"
                name="tag"
                value={note.tag}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-info w-100 fw-semibold">
              ➕ Add Note
            </button>
          </form>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="row g-4">
        {notes.length === 0 ? (
          <p className="text-muted text-center">No notes to display.</p>
        ) : (
          notes.map((note) => (
            <Noteitem key={note._id} note={note} deleteNote={deleteNote} editNote={editNote} />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
