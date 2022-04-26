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
      className='cursor-pointer flex max-h-48 h-20 sm:min-h-full w-full sm:max-w-sm bg-sky-50 rounded-lg shadow-md shadow-sky-200 flex-row z-auto'
    >
      <div className=' mx-auto my-auto items-center text-sky-700  active:text-sky-500 duration-75 active:scale-90 hover:text-sky-900 '>
        <div>
          <MdAddBox className='w-10 h-10' />
        </div>
      </div>
    </div>
  )
}
export default NewNoteItem
