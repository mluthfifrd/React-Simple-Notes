import React from 'react'
import NotesList from '../NotesList'

class NotesArchive extends React.Component {
  render() {
    const archivedNotes = this.props.notes.filter((note) => note.archived)

    return (
      <div>
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? (
          <NotesList
            notes={archivedNotes}
            onDelete={this.props.onDelete}
            onUnarchive={this.props.onUnarchive}
          />
        ) : (
          <p className="notes-list__empty-message">Tidak Ada Catatan</p>
        )}
      </div>
    )
  }
}

export default NotesArchive
