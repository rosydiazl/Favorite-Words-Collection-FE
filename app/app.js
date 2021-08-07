// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./user/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.book-image').hide()
  $('#sign-out').on('click', userEvents.onSignOut)
  $('.btn-login').hide()
})

$('.btn-signup').click(function () {
  $(this).addClass('hidden')
  $('.signup').addClass('show')
  $('.login').removeClass('show')
  $('.btn-login').removeClass('hidden')
  $('.btn-login').show()
  // $('.btn-signup').hide()
})
$('.btn-login').click(function () {
  $(this).addClass('hidden')
  $('.signup').removeClass('show')
  $('.login').addClass('show')
  $('.btn-signup').removeClass('hidden')
})

// Get the modal
const modal = document.getElementById('myModal')

// Get the button that opens the modal
const btn = document.getElementById('change-password')

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
