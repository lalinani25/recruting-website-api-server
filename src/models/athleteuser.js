const validator = require('validator')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.')
      }
    }
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8
  },
  school: {
    type: String,
    required: true
  }
})

userSchema.methods.toJSON = function() {
  const user = this
  
  const userObject = user.toObject()
  
  
  
  return userObject
}

userSchema.pre('save', async function (next) {

  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()  // run the save() method
})


const User = mongoose.model('User', userSchema);

console.log(User)


module.exports = User

console.log("This is test 5")