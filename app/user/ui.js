'use strict'

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  // console.log('Sign up successful. Data is: ', data)
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed.')
  // console.error('Sign up failed. Error is: ', error.status)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
