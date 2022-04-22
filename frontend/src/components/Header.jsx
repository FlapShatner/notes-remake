import { CgNotes } from 'react-icons/cg'
import BasicButton from './BasicButton'

function Header() {
  return (
    <div className='fixed z-9 w-full max-w-5xl opacity-60 border-y border-indigo-300 flex flex-row p-1 h-18 bg-indigo-200 justify-between'>
      <div className=' m-2 flex flex-row'>
        <CgNotes className='h-12 w-12' />
        <p className='ml-1  text-4xl flex self-center font-quicksand font-semibold'>NotesApp</p>
      </div>
      <BasicButton text={'Logout'} />
    </div>
  )
}
export default Header
