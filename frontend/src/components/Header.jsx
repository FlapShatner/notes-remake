import { CgNotes } from 'react-icons/cg'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const user = JSON.parse(window.localStorage.getItem('user'))

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className='fixed z-10 w-full max-w-5xl opacity-80 flex flex-row p-1 h-18 bg-gradient-to-r from-sky-500 to-sky-400 justify-between mix-blend-luminosity'>
      <Link to={'/'}>
        <div className=' m-2 flex flex-row'>
          <CgNotes className='text-orange-100 h-10 w-10' />
          <p className='ml-1  text-4xl flex self-center font-nunito font-medium text-orange-100'>NotesApp</p>
        </div>
      </Link>

      {user && (
        <button
          className=' bg-sky-600 mix-blend-luminosity opacity-80 hover:bg-sky-900 rounded-sm my-4 mr-4 px-2 text-sky-50 font-quicksand'
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  )
}
export default Header
