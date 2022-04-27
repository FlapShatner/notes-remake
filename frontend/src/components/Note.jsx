import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { MdEditNote, MdWifiProtectedSetup } from 'react-icons/md'
import Modal from './Modal'

function Note(props) {
  const navigate = useNavigate()
  // Modal state
  const [modal, setModal] = useState(false)
  const Toggle = () => setModal(!modal)

  const date = new Date(props.note.date).toLocaleDateString('en-US', { timeZone: 'UTC' })

  const noteData = props.note

  const openModal = (e) => {
    Toggle()
  }

  const handleEdit = () => {
    navigate('/edit/' + props.note._id)
  }

  const handleDelete = () => {
    props.onDelete(props.note._id)
  }

  return (
    <div className='flex max-h-48 w-full sm:max-w-sm bg-sky-50 rounded-lg shadow-md shadow-sky-200 flex-col '>
      <div className='flex flex-row' onClick={openModal}>
        <div className='px-6 py-3 basis-2/3 truncate text-xl font-karla font-medium text-sky-700'>
          {props.note.title ? props.note.title : 'Untitled'}
        </div>
        {date !== 'Invalid Date' && <div className='text-sky-700 place-self-center font-karla basis-1/3'>{date}</div>}
      </div>
      <div className='flex-col flex '>
        <div className='px-6 font-karla truncate text-sky-700' onClick={openModal}>
          {props.note.body}
        </div>
      </div>
      <div className='flex flex-row self-end justify-end w-min pr-3 pb-1'>
        <MdEditNote className='text-sky-700 h-6 w-6 cursor-pointer pb-1 mr-1' onClick={handleEdit} />
        <CgClose className='text-sky-700 h-5 w-5 cursor-pointer' onClick={handleDelete} />
      </div>

      <Modal show={modal} close={Toggle} noteData={noteData} />
    </div>
  )
}
export default Note
