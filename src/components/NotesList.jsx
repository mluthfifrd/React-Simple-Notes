import React from 'react'
import NotesItem from './NotesItem'

function NotesList({ notes, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
          {...note}
        />
      ))}
    </div>
  )
}

export default NotesList
