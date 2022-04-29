const path = require('path')
const express = require('express')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

const connectDB = require('./config/db')
connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/notes', require('./routes/noteRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
