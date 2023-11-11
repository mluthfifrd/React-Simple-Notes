import React, { useState } from 'react'

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value) // Panggil fungsi pencarian setiap kali nilai input berubah
  }

  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Header
