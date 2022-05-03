import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BackButton from '../components/BackButton'

function Create() {
  const API_URL = '/api/notes/'
  const user = JSON.parse(window.localStorage.getItem('user'))

  const navigate = useNavigate()

  const dateStr = new Date().toISOString().split('T', 1)

  const [formData, setFormData] = useState({
    date: dateStr[0],
    title: '',
    body: '',
    user: user._id,
  })

  const { date, title, body } = formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(API_URL, formData)
    } catch (err) {
      console.log(err)
    }
    navigate('/')
  }

  return (
    <>
      <div className='flex flex-col pt-28 justify-center items-center '>
        <div className='mx-auto w-3/4 sm:w-1/2 '>
          <BackButton />

          <form className='flex flex-col' onSubmit={handleSubmit}>
            <input
              className='place-self-end text-sky-50 opacity-60 mix-blend-luminosity bg-sky-400 border-0 w-1/3 mb-2 rounded-sm'
              type='date'
              name='date'
              id='date'
              value={date}
              onChange={handleChange}
            />

            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={handleChange}
              className='mix-blend-luminosity block w-full px-0.5 border-0 bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-xl placeholder:text-sky-50 rounded-sm'
              placeholder='Title'
            />

            <textarea
              name='body'
              id='body'
              value={body}
              required
              onChange={handleChange}
              className='form-textarea mt-6 w-full border-0 mix-blend-luminosity bg-sky-400 opacity-60 focus:ring-0 focus:opacity-80 text-white font-nunito font-md text-lg placeholder:text-sky-50 rounded-sm'
              rows='5'
            />
            <button
              className='w-full bg-sky-700 mix-blend-luminosity opacity-80 hover:bg-sky-900 rounded-md py-2 mt-4 text-sky-50 font-quicksand'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create
