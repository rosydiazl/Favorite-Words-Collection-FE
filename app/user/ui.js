'use strict'
const store = require('../store')

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  // console.log('Sign up successful. Data is: ', data)
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed.')
  // console.error('Sign up failed. Error is: ', error.status)
}
const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  store.user = data.user
  // console.log('Sign in successful. Data is: ', data)
  $('form').trigger('reset')
  // $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // $('#sign-out-message').text('')
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed.')
  // console.error('Sign in failed. Error is: ', error.status)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
