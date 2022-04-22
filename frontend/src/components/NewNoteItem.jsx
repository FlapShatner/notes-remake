import { MdAddBox } from 'react-icons/md'

function NewNoteItem() {
  return (
    <div className='cursor-pointer flex max-h-48 h-20 sm:min-h-full w-full sm:max-w-sm bg-indigo-50 rounded-lg shadow-md shadow-indigo-200 flex-row z-auto'>
      <div className=' mx-auto my-auto items-center text-indigo-300  active:text-indigo-500 duration-75 active:scale-90 hover:text-indigo-400 '>
        <div>
          <MdAddBox className='w-10 h-10' />
        </div>
      </div>
    </div>
  )
}
export default NewNoteItem
