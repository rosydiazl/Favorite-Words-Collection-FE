'use strict'

const getFormFields = require('../../lib/get-form-fields')
// const store = require('../store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('THIS WORKS!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  // console.log('THIS WORKS TOO!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  // console.log('THIS WORKS ALSO!')

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('CHANGE PASSWORD')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onCreateWord = function (event) {
  event.preventDefault()
  // console.log('Created word')

  const data = getFormFields(this)
  api.createWord(data)
    .then(ui.onCreateWordSuccess)
    .catch(ui.onCreateWordFailure)
}
const onShowWords = function (event) {
  event.preventDefault()
  // console.log('Show words')

  const data = getFormFields(this)
  api.showWords(data)
    .then(ui.onShowWordsSuccess)
    .catch(ui.onShowWordsFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateWord,
  onShowWords
}
