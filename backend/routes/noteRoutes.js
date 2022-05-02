const express = require('express')
const router = express.Router()
const { createNote, getNotes, deleteNote, editNote, getNote } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, createNote).get(protect, getNotes)

router.route('/:id').delete(protect, deleteNote).put(protect, editNote).get(protect, getNote)

module.exports = router
