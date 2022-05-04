const path = require('path')
const express = require('express')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

const connectDB = require('./config/db')
const res = require('express/lib/response')
connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/notes', require('./routes/noteRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')))
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
