import { CgChevronLeft } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()

  const onClick = () => navigate('/')

  return (
    <button
      onClick={onClick}
      className='flex flex-row w-min opacity-80 bg-sky-700 rounded-md py-1 pr-3 mt-4 text-sky-50 font-quicksand place-self-start mb-20 hover:bg-sky-900'
    >
      <CgChevronLeft className='h-6 w-6' /> <span className='place-self-center font-quicksand'>Back</span>
    </button>
  )
}
export default BackButton
