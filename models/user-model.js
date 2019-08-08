const mongoose = require('mongoose')
  const Schema = mongoose.Schema

  const userSchema = new Schema({
    name:  String,
    email: String,
    fone:   String,    
    date: { type: Date, default: Date.now }    
  }, {versionKey: false})

  module.exports = mongoose.model('User', userSchema)