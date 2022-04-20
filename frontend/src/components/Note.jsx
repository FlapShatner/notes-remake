import { useState } from 'react'

function Note(props) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    props.onDelete(props.note._id)
    setCount(count + 1)
  }

  return (
    <div className='flex max-h-48 w-full sm:max-w-sm bg-slate-50 rounded-lg shadow-md flex-col '>
      <div className='px-6 py-4  truncate text-xl font-medium text-black'>{props.note.title}</div>
      <p className='px-6  truncate text-slate-500'>{props.note.body}</p>
      <button onClick={handleClick} className='mr-3 mb-3 place-self-end'>
        X
      </button>
    </div>
  )
}
export default Note
