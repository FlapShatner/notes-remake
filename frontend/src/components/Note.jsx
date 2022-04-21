import { useState } from 'react'
import { CgClose, CgMore } from 'react-icons/cg'
import Modal from './Modal'

function Note(props) {
  // Modal state
  const [modal, setModal] = useState(false)
  const Toggle = () => setModal(!modal)

  const date = new Date(props.note.date).toLocaleDateString('en-US')

  const noteData = props.note

  const openModal = (e) => {
    Toggle()
  }

  const handleClick = () => {
    props.onDelete(props.note._id)
  }

  return (
    <div className='flex max-h-48 w-full sm:max-w-sm bg-indigo-50 rounded-lg shadow-md shadow-indigo-200 flex-col '>
      <div className='flex flex-row' onClick={openModal}>
        <div className='px-6 py-3 basis-2/3 truncate text-xl font-medium text-black'>{props.note.title}</div>
        <div className='place-self-center basis-1/3'>{date}</div>
      </div>
      <div className='flex-row justify-between flex pb-2 pr-2'>
        <div className='px-6 basis-5/6 truncate text-slate-500' onClick={openModal}>
          {props.note.body}
        </div>
        <div className='pt-2 mr-2 cursor-pointer' onClick={openModal}>
          <CgMore className='text-indigo-800 h-5 w-5' />
        </div>
        <div className='pt-2  cursor-pointer' onClick={handleClick}>
          <CgClose className='text-indigo-800 h-5 w-5' />
        </div>
      </div>
      <Modal show={modal} close={Toggle} noteData={noteData} />
    </div>
  )
}
export default Note
