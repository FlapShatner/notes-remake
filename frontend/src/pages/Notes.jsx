import { useEffect, useState } from 'react'

import Note from '../components/Note'
import axios from 'axios'

function Notes() {
  const API_URL = 'http://localhost:5000/api/notes/'

  const [notes, setNotes] = useState([])
  const [isDelete, setIsDelete] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setNotes(response.data)
    })
  }, [])

  const onDelete = async (id) => {
    try {
      const res = await axios.delete(API_URL + id)
      const newNotes = notes.filter((note) => note._id !== id)
      setNotes(newNotes)

      setIsDelete(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container mx-auto px-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:justify-evenly '>
        {notes.map((note) => (
          <Note key={note._id} onDelete={onDelete} note={note} />
        ))}
      </div>
    </div>
  )
}
export default Notes
