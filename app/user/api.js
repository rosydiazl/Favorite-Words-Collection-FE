'use strict'

const store = require('../store')
const config = require('../config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const createWord = function (data) {
  return $.ajax({
    url: config.apiUrl + '/words',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const showWords = function (data) {
  return $.ajax({
    url: config.apiUrl + '/words',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const updateWord = function (id, wordData) {
  return $.ajax({
    url: config.apiUrl + '/words/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: wordData
  })
}
const deleteWord = function (id) {
  return $.ajax({
    url: config.apiUrl + '/words/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const showWord = function (id, wordData) {
  return $.ajax({
    url: config.apiUrl + '/words/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: wordData
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createWord,
  showWords,
  updateWord,
  deleteWord,
  showWord
}
