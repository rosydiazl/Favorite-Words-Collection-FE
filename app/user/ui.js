'use strict'
const store = require('../store')

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  // console.log('Sign up successful. Data is: ', data)
  $('form').trigger('reset')
  // $('.btn-signup').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed.')
  // console.error('Sign up failed. Error is: ', error.status)
}
const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  store.user = data.user
  console.log('Sign in successful. Data is: ', data.user)
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
  // $('#create-word').show()
  $('#words-index').show()
  $('#update-word').show()
  $('#delete-word').show()
  $('#show-word').show()
  $('#myTopNav').show()
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
const onCreateWordSuccess = function (data) {
  $('#create-word-message').text('Word has been created')
  $('form').trigger('reset')
  console.log('Data is: ', data)
}

const onCreateWordFailure = function (error) {
  $('#create-word-message').text('Unable to create word')
  console.log('Error is: ', error.status)
}
const onShowWordsSuccess = function (data) {
  $('#show-words-message').text('')
  $('#create-word-message').text('')
  console.log('Data in showWordSuccess is: ', data)
  const words = data.words

  let wordTitlesHtml = ''

  words.forEach(word => {
    console.log(word)
    wordTitlesHtml += `
    <h5> ${word.word}</h5>
    <p> Definition: ${word.definition} </p>
    <p> Origin: ${word.origin} </p>
    <p> Language: ${word.language} </p>
    <p> Sentence: ${word.sentence}</p>`
  })

  if (data.words.length === 0) {
    $('#show-words-message').text('No words have been created.')
  }
  $('#words').html(wordTitlesHtml)
  $('form').trigger('reset')
}

const onShowWordsFailure = function () {
  $('#show-words-message').text('Unable to show words')
  // console.log('Error is: ', error.status)
}
const onUpdateWordSuccess = function (response) {
  $('#update-word-message').text('Word was updated successfully')
  // console.log(`Server response: ${response}`)
  $('form').trigger('reset')
}

const onUpdateWordFailure = function () {
  $('#update-word-message').text('Unable to update word')
  // console.log('Error is ', error.status)
}
const onDeleteWordSuccess = function () {
  $('#delete-word-message').text('Word was deleted successfully.')
  // console.log(`Server response: ${response}`)
  $('form').trigger('reset')
}

const onDeleteWordFailure = function () {
  $('#delete-word-message').text('Unable to delete word')
  // console.log('Error is ', error.status)
}
const onShowWordSuccess = function (data) {
  $('#delete-word-message').text('Word was shown successfully.')
  $('#shown-word').html(`
  <p> Word: ${data.word.word}</p>
    <p> Definition: ${data.word.definition}</p>
    <p>Origin: ${data.word.origin}</p>
    <p>Language: ${data.word.language}</p>
    <p>Sentence: ${data.word.sentence}</p>`)
  $('form').trigger('reset')
  console.log('Data word is: ', data.word)
}

const onShowWordFailure = function () {
  $('#delete-word-message').text('Unable to show word')
  // console.log('Error is ', error.status)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onCreateWordSuccess,
  onCreateWordFailure,
  onShowWordsSuccess,
  onShowWordsFailure,
  onUpdateWordSuccess,
  onUpdateWordFailure,
  onDeleteWordSuccess,
  onDeleteWordFailure,
  onShowWordSuccess,
  onShowWordFailure
}
