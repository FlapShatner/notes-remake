const express = require('express')
const router = express.Router()
const { createNote, getNotes, deleteNote, editNote, getNote } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(createNote).get(protect, getNotes)

router.route('/:id').delete(deleteNote).put(editNote).get(getNote)

module.exports = router
