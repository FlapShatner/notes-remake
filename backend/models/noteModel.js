const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    date: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      default: 'Untitled',
    },
    body: {
      type: String,
      required: [true, 'Please type something'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Note', noteSchema)
