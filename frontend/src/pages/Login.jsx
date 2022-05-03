import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function Login() {
  const API_URL = '/api/users/'
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(API_URL + 'login', formData)

      localStorage.setItem('user', JSON.stringify(response.data))
      navigate('/')
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      console.log(message)
    }
  }

  return (
    <div className='flex flex-col pt-40 justify-center items-center '>
      <div className='mx-auto w-3/4 sm:w-1/2'>
        <div className='flex justify-center '>
          <h2 className='font-nunito px-4 mb-4 text-2xl  text-white '>Login</h2>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            type='email'
            name='email'
            id='email'
            className='mix-blend-luminosity block w-full px-0.5 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
            placeholder='Em@il'
            onChange={handleChange}
          />

          <input
            type='password'
            name='password'
            id='password'
            className='mix-blend-luminosity block w-full px-0.5 mr-2 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
            placeholder='Password'
            onChange={handleChange}
          />

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
export default Login
