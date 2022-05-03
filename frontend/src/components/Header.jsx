import { CgNotes, CgLogOut } from 'react-icons/cg'
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
        <div className='flex flex-col mr-3'>
          <div className=' text-xs text-sky-50 opacity-80'>Signed in as {user.name}</div>
          <button
            className='flex  justify-center w-max bg-sky-600 mix-blend-luminosity opacity-80 hover:bg-sky-900 rounded-sm ml-auto my-2 mt-mr-4 px-1 text-sky-50 font-quicksand'
            onClick={logout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}
export default Header
