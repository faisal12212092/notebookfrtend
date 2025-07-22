import React from "react";
// import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Noteitem = ({ note, deleteNote, editNote }) => {
  const handleDelete = () => {
    deleteNote(note._id);
  };

  const handleEdit = () => {
    const title = prompt("Edit Title", note.title);
    const description = prompt("Edit Description", note.description);
    const tag = prompt("Edit Tag", note.tag);
    if (title && description) {
      editNote(note._id, title, description, tag);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white border-secondary shadow-lg h-100 rounded-4">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h4 className="card-title text-info fw-bold">{note.title}</h4>
            <p className="card-text text-light small">{note.description}</p>
            {note.tag && (
              <span className="badge bg-secondary text-light">{note.tag}</span>
            )}
          </div>
          <div className="mt-4 d-flex justify-content-between gap-2">
            <button
              className="btn btn-danger btn-sm rounded-pill px-4 py-2 shadow-sm"
              onClick={handleDelete}
            >
               Delete
            </button>
            <button
              className="btn btn-warning btn-sm rounded-pill px-4 py-2 shadow-sm text-dark"
              onClick={handleEdit}
            >
               Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
