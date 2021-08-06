'use strict'

const getFormFields = require('../../lib/get-form-fields')
// const store = require('../store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('THIS WORKS!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onSignUp
}
