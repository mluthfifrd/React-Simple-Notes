import React, { useState } from 'react'
import Header from '../layout/Header'
import NotesBody from './NotesBody'

function NotesApp() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = (value) => {
    setSearchTerm(value)
  }

  return (
    <div className="note-app">
      <Header onSearch={handleSearch} />
      <NotesBody searchTerm={searchTerm} />
    </div>
  )
}

export default NotesApp
