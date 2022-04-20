import { useEffect, useState } from 'react'

import Note from '../components/Note'
import axios from 'axios'

function Notes() {
  const API_URL = 'http://localhost:5000/api/notes/'

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setNotes(response.data)
    })
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  md:justify-evenly '>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}
export default Notes
