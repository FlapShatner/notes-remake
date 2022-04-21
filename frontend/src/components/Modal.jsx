import ReactDOM from 'react-dom'
import { CgClose } from 'react-icons/cg'

function Modal({ show, close, noteData }) {
  const { date, _id, title, body } = noteData

  const dateString = new Date(date).toLocaleDateString('en-US')

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className='modalContainer flex justify-center items-center fixed inset-0 bg-black/70'
          onClick={() => close()}
        >
          <div
            className='modal w-3/4 sm:w-1/2 min-h-fit bg-indigo-50 drop-shadow-md rounded-md'
            onClick={(e) => e.stopPropagation()}
          >
            <header className='flex justify-between relative p-6 '>
              <h2 className=' pl-4 text-xl text-start overflow-hidden hover:overflow-auto'>{title}</h2>
              <p className='pr-4'>{dateString}</p>
              <button className='absolute top-2 right-2 bg-transparent' onClick={() => close()}>
                <CgClose className='h-5 w-5' />
              </button>
            </header>
            <p className=' p-8'>{body}</p>
            <footer className='pt-8'>
              <button className='bg-transparent px-6 py-4 font-medium' onClick={() => close()}>
                Close
              </button>
              <button className='float-right px-6 py-4 font-medium border-md'>Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal')
  )
}
export default Modal
