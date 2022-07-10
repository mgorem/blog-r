import React, { useState } from 'react'

const Create = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    console.log(blog)
  }

  return (
    <div className='create'>
    <h2>Add a New Blog</h2>
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <label>Blog Title:</label>
      <input 
        type="text" 
        required
        value={ title }
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Textarea */}
      <label>Blog Body:</label>
      <textarea 
        required
        value={ body }
        onChange={(e) => setBody(e.target.value)}
        style={{height:"300px"}}
      ></textarea>

      {/* Author */}
      <label>Blog Author:</label>
      <select
        value={ author }
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
      </select>
      <button>Add Blog</button>
      <p>{ title }</p>
      <p>{ body }</p>
      <p>{ author }</p>
    </form>
    </div>
  )
}

export default Create