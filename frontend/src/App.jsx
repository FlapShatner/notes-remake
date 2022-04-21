import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/notes'
import Header from './components/Header'

function App() {
  return (
    <div className='min-h-screen  bg-indigo-100 '>
      <div className='max-w-5xl mx-auto'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Notes />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
