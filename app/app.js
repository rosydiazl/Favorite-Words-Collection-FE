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
  $('#update-word').on('submit', userEvents.onUpdateWord)
  $('#create-word').on('submit', userEvents.onCreateWord)
  $('#create-word').hide()
  $('#words-index').on('click', userEvents.onShowWords)
  $('#words-index').hide()
  $('#delete-word').on('click', userEvents.onDeleteWord)
  $('#delete-word').hide()
  $('#show-word').hide()
  $('#show-word').on('submit', userEvents.onShowWord)
  // $('#createWords').on('click', ('#create-word').show())
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.book-image').hide()
  $('#sign-out').on('click', userEvents.onSignOut)
  $('.btn-login').hide()
  $('#myTopNav').hide()
  $('#words').on('click', '.dynamic-delete-word', userEvents.onDynamicDeleteWord)
  // $('#words').on('click', '.edit-word', userEvents.onDynamicUpdateWord)
  // $('#words').on('click', '.edit-word', userEvents.onDynamicUpdateWord)
  // $('#words').on('click', '.edit-word', userEvents.onDynamicUpdateWord)
  $('#update-word').hide()
})

// $('#delete-word').on('click', function () {
// $('.dataId').data()
// $('#delete-word').on(userEvents.onDeleteWord)
// })
$('#words-index').on('click', function () {
  $('#delete-word-message').text('')
  $('#create-word-message').text('')
  $('#update-word-message').text('')
  // $('#show-words-message').text('')
})
$('#createWords').on('click', function () {
  $('#create-word').show()
})
$('#words').on('click', '.edit-word', function () {
  // console.log('CLICKEDD!!')
  $('#update-word').show()
})

// $('#change-password').on('click', function () {
// $('.overlay').show()
// })

$('.btn-signup').on('click', function () {
  // add and remove classes to add CSS that rotates the sign in and sign up
  $(this).addClass('hidden')
  $('.signup').addClass('show')
  $('.login').removeClass('show')
  $('.btn-login').removeClass('hidden')
  // show sign in form after sign up click
  $('.btn-login').show()
  // hide sign up after sign up click
  $('.btn-signup').hide()
})
$('.btn-login').on('click', function () {
  // add and remove classes to add CSS that rotates the sign in and sign up
  $(this).addClass('hidden')
  $('.signup').removeClass('show')
  $('.login').addClass('show')
  $('.btn-signup').removeClass('hidden')
  // hide log in after user clicks on sign in
  $('.btn-login').hide()
  // show sign up button after user clicks on sign in
  $('.btn-signup').show()
})

// Getting the modal by ID
const modal = document.getElementById('myModal')

// Getting the button that opens the modal by ID
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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const myFunction = function () {
  const x = document.getElementById('myTopNav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}
myFunction()
