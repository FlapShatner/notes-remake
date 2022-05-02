const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')

// @desc Create new note
// @route POST /api/notes
// @access Public

const createNote = asyncHandler(async (req, res) => {
  const { date, title, body, user } = req.body

  if (!body) {
    res.status(400)
    throw new Error('Please add some text')
  }

  const note = await Note.create({
    date,
    title,
    body,
    user,
  })
  res.status(201).json(note)
})

// @desc Get notes
// @route GET /api/notes
// @access Public

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user.id })

  res.status(200).json(notes)
})

// @desc Get one note
// @route GET /api/notes
// @access Public

const getNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id)

  res.status(200).json(note)
})

// @desc Delete a note
// @route DELETE /api/notes
// @access Public

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id)

  res.status(200).json({ success: true })
})

// @desc Update a note
// @route PUT /api/notes
// @access Public

const editNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(note)
})

module.exports = {
  createNote,
  getNotes,
  getNote,
  deleteNote,
  editNote,
}
