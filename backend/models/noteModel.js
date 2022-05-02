const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    date: {
      type: String,
    },
    title: {
      type: String,
      default: 'Untitled',
    },
    body: {
      type: String,
      required: [true, 'Please type something'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Note', noteSchema)
