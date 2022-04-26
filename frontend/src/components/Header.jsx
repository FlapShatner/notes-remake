import { CgNotes } from 'react-icons/cg'

function Header() {
  return (
    <div className='fixed z-9 w-full max-w-5xl opacity-60 border-y border-sky-300 flex flex-row p-1 h-18 bg-sky-200 justify-between'>
      <div className=' m-2 flex flex-row'>
        <CgNotes className='text-blue-900 h-12 w-12' />
        <p className='ml-1  text-4xl flex self-center font-quicksand font-semibold text-blue-900'>NotesApp</p>
      </div>
    </div>
  )
}
export default Header
