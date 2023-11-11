import React from 'react'

class NotesInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler = (event) => {
    const inputValue = event.target.value
    if (inputValue.length <= 50) {
      this.setState({
        title: inputValue
      })
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter: {50 - this.state.title.length}
        </p>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Ini adalah judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            maxLength={50}
          />
          <textarea
            type="text"
            rows="10"
            placeholder="Tuliskan catatanmu di sini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NotesInput
