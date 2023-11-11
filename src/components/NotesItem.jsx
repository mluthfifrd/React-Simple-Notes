import React from 'react'
import NotesItemContent from './NotesItemContent'
import NotesButton from './NotesButton'

function NotesItem({ title, body, createdAt, id, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-item">
      <NotesItemContent title={title} body={body} createdAt={createdAt} />
      <NotesButton id={id} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
    </div>
  )
}

export default NotesItem
