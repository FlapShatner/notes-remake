import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Header from './components/Header'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-indigo-500 to-amber-100 '>
      <div className='max-w-5xl mx-auto'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/create' element={<Create />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
