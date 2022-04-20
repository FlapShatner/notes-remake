const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv').config()

const app = express()

app.use(cors())

const connectDB = require('./config/db')

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/notes', require('./routes/noteRoutes'))

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
