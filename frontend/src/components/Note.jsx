function Note({ note }) {
  return (
    <div className=' px-6 py-4 max-h-48 max-w-sm bg-zinc-300 rounded-lg shadow-md flex-col '>
      <div className=' truncate text-2xl font-medium text-black'>{note.title}</div>
      <p className='truncate text-slate-500'>{note.body}</p>
    </div>
  )
}
export default Note
