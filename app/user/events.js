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
module.exports = {
  onSignUp,
  onSignIn
}
