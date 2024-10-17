const express = require('express')
const User = require('../models/athleteuser')
const mongoose = require("mongoose");
const router = new express.Router()
const { get } = require("request-promise");
 
console.log("this is a test")

// Add a new user
router.post('/athleteuser', async (req, res) => {

  const user = new User(req.body)
  console.log("hello" + user)

  try{
    await user.save()
    res.status(200).send(user)
  }
  catch{
    res.status(400).send(error)
  }

})


module.exports = router

console.log("test test")
