import React from 'react'

class NotesItemContent extends React.Component {
  formatDate(date) {
    const today = new Date(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return today.toLocaleDateString('id-ID', options)
  }

  render() {
    const { title, createdAt, body } = this.props

    return (
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{this.formatDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
    )
  }
}

export default NotesItemContent
