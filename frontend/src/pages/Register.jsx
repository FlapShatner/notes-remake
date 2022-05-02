import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({})

  return (
    <div className='flex flex-col pt-40 justify-center items-center '>
      <div className='mx-auto w-3/4 sm:w-1/2'>
        <div className='flex justify-center '>
          <h2 className='font-nunito px-4 mb-4 text-2xl  text-white '>Register</h2>
        </div>
        <form className='flex flex-col'>
          <input
            type='text'
            name='name'
            id='name'
            className='mix-blend-luminosity block w-full px-0.5 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
            placeholder='Username'
          />

          <input
            type='email'
            name='email'
            id='email'
            className='mix-blend-luminosity block w-full px-0.5 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
            placeholder='@'
          />
          <div className='flex flex-row'>
            <input
              type='password'
              name='password'
              id='password'
              className='mix-blend-luminosity block w-full px-0.5 mr-2 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
              placeholder='Create a password'
            />
            <input
              type='password2'
              name='password2'
              id='password2'
              className='mix-blend-luminosity block w-full px-0.5 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
              placeholder='Confirm password'
            />
          </div>
          <button
            className='w-full bg-sky-600 mix-blend-luminosity opacity-80 hover:bg-sky-900 rounded-md py-2 mt-4 text-sky-50 font-quicksand'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Register
