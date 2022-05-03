import { useNavigate } from 'react-router-dom'
import { MdAddBox } from 'react-icons/md'

function NewNoteItem() {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/create')
  }

  return (
    <div
      onClick={onClick}
      className='cursor-pointer shadow-md shadow-sky-800 opacity-60 flex max-h-48 h-20 sm:min-h-full w-full mix-blend-luminosity sm:max-w-sm bg-gradient-to-r from-sky-600 to-sky-400 rounded-sm flex-row z-auto'
    >
      <div className=' mx-auto my-auto items-center text-white active:text-sky-300 duration-75 hover:scale-110 hover:text-sky-200 '>
        <div>
          <MdAddBox className='w-10 h-10' />
        </div>
      </div>
    </div>
  )
}
export default NewNoteItem
