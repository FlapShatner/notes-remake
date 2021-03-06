import ReactDOM from 'react-dom'

function Modal({ show, close, noteData }) {
  const { date, _id, title, body } = noteData

  const dateString = new Date(date).toLocaleDateString('en-US')

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className='z-10 modalContainer flex justify-center items-center fixed inset-0 bg-black/70'
          onClick={() => close()}
        >
          <div
            className='modal z-20  w-3/4 sm:w-1/2 min-h-fit bg-gradient-to-r from-cyan-600 to-cyan-500 drop-shadow-md rounded-md'
            onClick={(e) => e.stopPropagation()}
          >
            <p className='text-orange-100 text-right mr-4 mt-3 font-karla'>
              {dateString !== 'Invalid Date' ? dateString : '\u00a0'}
            </p>
            <h2 className='text-orange-100 leading-tight font-karla ml-12 w-max text-xl text-start overflow-hidden hover:overflow-auto'>
              {title}
            </h2>

            <p className='font-karla p-6 pl-8 text-orange-100'>{body}</p>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal')
  )
}
export default Modal
