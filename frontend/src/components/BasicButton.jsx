function BasicButton({ text }) {
  return (
    <div className=' p-3 cursor-pointer flex bg-indigo-50 self-center h-5  rounded-md '>
      <div className=' opacity-100 self-center font-medium text-indigo-900'>{text}</div>
    </div>
  )
}
export default BasicButton
