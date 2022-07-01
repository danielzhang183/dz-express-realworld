const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const articleSchema = new mongoose.Schema({
  ...baseModel,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
    set: val => md5(val),
    select: false
  },
  tagList: {
    type: [String],
    default: null
  },
  image: {
    type: String,
    default: null
  },
})

module.exports = articleSchema
