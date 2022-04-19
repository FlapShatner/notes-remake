const express = require('express')
const router = express.Router()
const { createNote, getNotes, deleteNote, editNote, getNote } = require('../controllers/noteController')

router.route('/').post(createNote).get(getNotes)

router.route('/:id').delete(deleteNote).put(editNote).get(getNote)

module.exports = router
