// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./user/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').hide()
})
