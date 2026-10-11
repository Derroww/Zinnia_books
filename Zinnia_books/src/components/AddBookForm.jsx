import React from 'react'
import { useState } from 'react'

function AddBookForm({ addBook }) {
     const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && author && genre) {
      addBook(name, author, genre)
      setName('')
      setAuthor('')
      setGenre('')
    }
  }
  return (
    <>
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Book
        </button>
      </form>
    </div>
    </>
  )
}

export default AddBookForm