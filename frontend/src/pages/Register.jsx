import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from '../api/axios'

function Register() {
  const API_URL = '/api/users/'
  const navigate = useNavigate()

  const user = JSON.parse(window.localStorage.getItem('user'))

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== password2) {
      // TODO add error alert to form
      console.log('Passwords must match')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      try {
        const res = await axios.post(API_URL, userData)
        localStorage.setItem('user', JSON.stringify(res.data))
        navigate('/')
      } catch (error) {
        const message =
          (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message)
      }
    }
  }

  return (
    <div className='flex flex-col pt-40 justify-center items-center '>
      <div className='mx-auto w-3/4 sm:w-1/2'>
        <div className='flex justify-center '>
          <h2 className='font-nunito px-4 mb-4 text-2xl  text-white '>Register</h2>
        </div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            className='mix-blend-luminosity block w-full px-0.5 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
            placeholder='Username'
            onChange={handleChange}
          />

          <input
            type='email'
            name='email'
            id='email'
            value={email}
            className='mix-blend-luminosity block w-full px-0.5 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
            placeholder='@'
            onChange={handleChange}
          />
          <div className='flex flex-row'>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              className='mix-blend-luminosity block w-full px-0.5 mr-2 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
              placeholder='Create a password'
              onChange={handleChange}
            />
            <input
              type='password'
              name='password2'
              id='password2'
              value={password2}
              className='mix-blend-luminosity block w-full px-0.5 my-4 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-md placeholder:text-sky-50 placeholder:text-sm rounded-sm'
              placeholder='Confirm password'
              onChange={handleChange}
            />
          </div>
          <button
            className='w-full bg-sky-600 mix-blend-luminosity opacity-80 hover:bg-sky-900 rounded-md py-2 mt-4 text-sky-50 font-quicksand'
            type='submit'
          >
            Submit
          </button>
        </form>
        <Link to={'/login'}>
          <button className='w-full border-2 border-sky-600 mix-blend-luminosity opacity-80 hover:bg-sky-500 rounded-md py-1 mt-20 text-sky-100 font-quicksand'>
            Back to login
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Register
