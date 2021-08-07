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
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out-message').text('')
  $('.btn-signup').hide()
  $('.btn-login').hide()
  $('.tile').hide()
  $('.book-image').show()
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed.')
  // console.error('Sign in failed. Error is: ', error.status)
}
const onSignOutSuccess = function () {
  $('#sign-out-message').text('Log out successful. Come back soon!')
  // $('form').trigger('reset')
  // console.log('Sign out successfully and nothing was returned.')
  $('#sign-in').show()
  $('#sign-out').hide()
  $('.tile').show()
  $('#change-password').hide()
  $('#message').text('')
  $('.book-image').hide()
}

const onSignOutFailure = function () {
  $('#sign-out-message').text('Sign out failed.')
// console.error('Sign out failed. Error is: ', error.status)
}

const onChangePasswordSuccess = function (data) {
  $('#change-password-message').text('Password has been changed.')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  $('#change-password-message').text('Unable to change password')
  console.log('Error is', error.status)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
