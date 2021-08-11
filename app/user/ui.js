'use strict'
const store = require('../store')

// timer to make the sign in and sign up messages disappear after a few seconds
const hideMessageTimer = () => {
  setTimeout(() => {
    // hide message after the established time
    $('#message').hide()
    // time in milliseconds
  }, 3500)
}

const onSignUpSuccess = function (data) {
  // display text on sign up success
  $('#message').text('Signed up successfully!')
  // console.log('Sign up successful. Data is: ', data)
  // reset the form
  $('form').trigger('reset')
  // $('.btn-signup').hide()
  hideMessageTimer()
}

const onSignUpFailure = function () {
  // display text on sign up failure
  $('#message').text('Sign up failed.')
  // console.error('Sign up failed. Error is: ', error.status)
}
const onSignInSuccess = function (data) {
  // display message on sign in success
  $('#message').text('Signed in successfully!')
  store.user = data.user
  // console.log('Sign in successful. Data is: ', data.user)
  // reset the form
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
  $('#delete-word').show()
  // $('#show-word').show()
  $('#myTopNav').show()
  $('.bottom-container').hide()
  // $('#update-word').show()
  // call on function to set the timer to the message
  hideMessageTimer()
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
  $('#myTopNav').hide()
  $('.bottom-container').show()
  $('#update-word').hide()
  $('#delete-word').hide()
  $('#show-word').hide()
  $('#words').text('')
  $('#create-word').hide()
  $('#delete-word-message').text('')
  $('#show-words-message').text('')
}

const onSignOutFailure = function () {
  $('#sign-out-message').text('Sign out failed.')
// console.error('Sign out failed. Error is: ', error.status)
}

const onChangePasswordSuccess = function (data) {
  $('#change-password-message').text('Password has been changed.')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#change-password-message').text('Unable to change password')
  // console.log('Error is', error.status)
}
const onCreateWordSuccess = function (data) {
  $('#create-word-message').text('Created!')
  $('form').trigger('reset')
  // console.log('Data is: ', data)
}

const onCreateWordFailure = function () {
  $('#create-word-message').text('Unable to create word.')
  // console.log('Error is: ', error.status)
}
const onShowWordsSuccess = function (data) {
  // display a message to the user once
  $('#show-words-message').text('These are your words:')
  // console.log('Data in showWordSuccess is: ', data)

  // set words to be the word data
  const words = data.words

  let wordTitlesHtml = ''

  // forEach loop that iterates through all of the words that have been created
  // edit button and delete button are storing the word's ID in the DOM

  // The other elements are pulling the word data in order to display it as shown below to the user they belong to
  words.forEach(word => {
    // console.log(word)
    wordTitlesHtml += `
    <button class='edit-word' data-id=${word._id}>Edit</button>
    <button class='dynamic-delete-word' data-id=${word._id}>Delete</button>
    <h3> <strong> ${word.word} </strong></h3>
    <p> Definition: ${word.definition} </p>
    <p> Origin: ${word.origin} </p>
    <p> Language: ${word.language} </p>
    <p> Sentence: ${word.sentence}</p>
    <p> Word ID: ${word._id}</p>
  `
  })

  // if the user has not created any words, then display a message to let them know that there are no created words.
  if (data.words.length === 0) {
    $('#show-words-message').text('No words have been created.')
  }
  // setting words to wordTitleHtml
  $('#words').html(wordTitlesHtml)
  // reset the form on success
  $('form').trigger('reset')
}

const onShowWordsFailure = function () {
  $('#show-words-message').text('Unable to show words')
  // console.log('Error is: ', error.status)
}
const onUpdateWordSuccess = function (response) {
  $('#update-word-message').text('Updated!')
  // console.log(`Server response: ${response}`)
  $('form').trigger('reset')
}

const onUpdateWordFailure = function () {
  $('#update-word-message').text('Unable to update word.')
  // console.log('Error is ', error.status)
}

const onDeleteWordSuccess = function () {
  $('#delete-word-message').text('Word was deleted successfully.')
  // console.log(`Server response: ${response}`)
  // $('#words').filter('_id')
}

const onDeleteWordFailure = function () {
  $('#delete-word-message').text('Unable to delete word')
  // console.log('Error is ', error.status)
}
const onShowWordSuccess = function (data) {
  $('#shown-word').html(`
  <p> Word: ${data.word.word}</p>
    <p> Definition: ${data.word.definition}</p>
    <p>Origin: ${data.word.origin}</p>
    <p>Language: ${data.word.language}</p>
    <p>Sentence: ${data.word.sentence}</p>
    <p>Word ID: ${data.word._id}</p>`)
  $('form').trigger('reset')
  // console.log('Data word is: ', data.word)
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
  onShowWordFailure,
  hideMessageTimer
}
