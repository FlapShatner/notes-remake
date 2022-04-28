import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'

function Edit() {
  const API_URL = 'http://localhost:5000/api/notes/'

  const navigate = useNavigate()
  const params = useParams()

  const dateStr = new Date().toISOString().split('T', 1)

  //   @TODO populate form with existing note

  useEffect(() => {
    axios.get(API_URL + params.id).then((response) => {
      setFormData(response.data)
    })
  }, [])

  const [formData, setFormData] = useState({
    date: dateStr,
    title: '',
    body: '',
  })

  const { title, body } = formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.put(API_URL + params.id, formData)
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
              value={dateStr}
              onChange={handleChange}
            />

            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={handleChange}
              className='block w-full px-0.5 border-0 mix-blend-luminosity bg-sky-400 opacity-60 focus:ring-0 indent-4 focus:opacity-80 text-white font-nunito font-md text-xl placeholder:text-sky-50 rounded-sm'
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
              className='w-full bg-sky-700 opacity-80 mix-blend-luminosity hover:bg-sky-900 rounded-md py-2 mt-4 text-sky-50 font-quicksand'
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

export default Edit
