import React, { Component } from 'react'
import NotesList from './NotesList'
import NotesInput from './note.input/NotesInput'
import NotesArchive from './note.archive/NotesArchive'
import { getInitialData } from '../utils'

class NotesBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allNotes: getInitialData(),
      displayedNotes: getInitialData()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.filterNotes(this.props.searchTerm)
    }
  }

  onDeleteNoteHandler = (id) => {
    const updatedAllNotes = this.state.allNotes.filter((note) => note.id !== id)
    this.updateNotes(updatedAllNotes)
  }

  onAddNoteHandler = ({ title, body }) => {
    const nextId = this.state.allNotes.length + 1
    const currentDate = new Date().toLocaleString()

    const newNote = {
      id: nextId,
      title,
      body,
      createdAt: currentDate,
      archived: false
    }

    const updatedAllNotes = [...this.state.allNotes, newNote]
    this.updateNotes(updatedAllNotes)
  }

  onArchiveHandler = (id) => {
    const updatedNotes = this.state.displayedNotes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    )
    this.updateNotes(updatedNotes)
  }

  onUnarchiveHandler = (id) => {
    const updatedNotes = this.state.displayedNotes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    )
    this.updateNotes(updatedNotes)
  }

  filterNotes(searchTerm) {
    const filteredNotes = this.state.allNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    this.setState({
      displayedNotes: searchTerm ? filteredNotes : this.state.allNotes
    })
  }

  updateNotes(updatedNotes) {
    this.setState({
      allNotes: updatedNotes,
      displayedNotes: updatedNotes
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.filterNotes(this.props.searchTerm)
    }

    if (!this.props.searchTerm && prevProps.searchTerm) {
      this.setState({
        displayedNotes: this.state.allNotes
      })
    }

    if (!this.props.searchTerm && this.props.searchTerm !== prevProps.searchTerm) {
      this.setState({
        displayedNotes: this.state.allNotes
      })
    }
  }

  render() {
    const activeNotes = this.state.displayedNotes.filter((note) => !note.archived)
    const archivedNotes = this.state.displayedNotes.filter((note) => note.archived)

    return (
      <div className="note-app__body">
        <NotesInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          <NotesList
            notes={activeNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveHandler}
          />
        ) : (
          <p className="notes-list__empty-message">Tidak Ada Catatan</p>
        )}
        <NotesArchive
          notes={archivedNotes}
          onDelete={this.onDeleteNoteHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
      </div>
    )
  }
}

export default NotesBody
