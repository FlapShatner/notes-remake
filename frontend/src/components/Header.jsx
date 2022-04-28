import { CgNotes } from 'react-icons/cg'

function Header() {
  return (
    <div className='fixed z-10 w-full max-w-5xl opacity-80 flex flex-row p-1 h-18 bg-gradient-to-r from-sky-500 to-sky-400 justify-between mix-blend-luminosity'>
      <div className=' m-2 flex flex-row'>
        <CgNotes className='text-orange-100 h-10 w-10' />
        <p className='ml-1  text-4xl flex self-center font-nunito font-medium text-orange-100'>NotesApp</p>
      </div>
    </div>
  )
}
export default Header
