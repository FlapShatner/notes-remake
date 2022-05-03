import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Note from '../components/Note'
import axios from '../api/axios'
import NewNoteItem from '../components/NewNoteItem'

function Notes() {
  const API_URL = '/api/notes/'
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [isDelete, setIsDelete] = useState(false)
  const [isError, setIsError] = useState(false)

  const user = JSON.parse(window.localStorage.getItem('user'))

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      axios.get(API_URL, config).then((response) => {
        setNotes(response.data)
      })
    } catch (error) {
      console.log(error)
    }

    // axios.get('/api/notes').then((response) => {
    //   setNotes(response.data)
    // })
  }, [])

  const onDelete = async (id) => {
    if (window.confirm('Delete note?')) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
        const res = await axios.delete(API_URL + id, config)
        const newNotes = notes.filter((note) => note._id !== id)
        setNotes(newNotes)

        setIsDelete(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='container mx-auto  px-10'>
      <div className=' grid grid-cols-1 py-32 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:justify-evenly '>
        <NewNoteItem />

        {notes.map((note) => (
          <Note key={note._id} onDelete={onDelete} note={note} />
        ))}
      </div>
    </div>
  )
}
export default Notes
