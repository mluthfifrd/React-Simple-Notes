import React from 'react'

function NotesButton({ id, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      {onUnarchive && (
        <button className="note-item__archive-button" onClick={() => onUnarchive(id)}>
          Pindahkan
        </button>
      )}
      {!onUnarchive && (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
          Arsipkan
        </button>
      )}
    </div>
  )
}

export default NotesButton
