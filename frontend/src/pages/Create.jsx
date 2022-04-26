import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BackButton from '../components/BackButton'

function Create() {
  const API_URL = 'http://localhost:5000/api/notes/'

  const navigate = useNavigate()

  const dateStr = new Date().toISOString().split(',')

  const [formData, setFormData] = useState({
    date: dateStr,
    title: '',
    body: '',
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
      navi
    } catch (err) {
      console.log(err)
    }
    navigate('/')
  }

  return (
    <>
      <div className='flex flex-col pt-28 justify-center justify-center items-center '>
        <div className='mx-auto w-3/4 sm:w-1/2 '>
          <BackButton />

          <form className='flex flex-col' onSubmit={handleSubmit}>
            <input
              className='place-self-end text-sky-200 bg-sky-50 border-0 border-sky-200 border-b-2 w-1/3 mb-2'
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
              className='block w-full px-0.5 border-0 bg-sky-50 focus:ring-0 border-sky-200 border-b-2 focus:border-sky-300 text-slate-500 font-nunito font-md text-xl placeholder:text-sky-200 rounded-sm'
              placeholder='    Title'
            />

            <textarea
              name='body'
              id='body'
              value={body}
              required
              onChange={handleChange}
              className='form-textarea mt-6 w-full border-0 border-b-2 border-sky-200 bg-sky-50 focus:ring-0 focus:border-sky-300 text-slate-500 font-nunito font-md text-lg placeholder:text-sky-300 rounded-sm'
              rows='5'
            />
            <button
              className='w-full bg-sky-700 hover:bg-sky-900 rounded-md py-2 mt-4 text-sky-50 font-quicksand'
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
