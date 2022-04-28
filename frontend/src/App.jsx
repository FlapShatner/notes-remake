import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/notes'
import Create from './pages/Create'
import Header from './components/Header'
import Edit from './pages/Edit'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-sky-400 to-sky-200 '>
      <div className='max-w-5xl mx-auto'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
