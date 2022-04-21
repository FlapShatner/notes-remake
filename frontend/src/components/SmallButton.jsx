function SmallButton({ text }) {
  return (
    <div className='px-2 cursor-pointer flex border bg-indigo-300 self-center h-5  rounded-lg'>
      <p className='text-indigo-50 self-center'>{text}</p>
    </div>
  )
}
export default SmallButton
