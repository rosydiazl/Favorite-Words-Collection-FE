let apiUrl
const apiUrls = {
  production: 'https://immense-anchorage-35552.herokuapp.com',
  development: 'http://localhost:4741'
  // development: 'https://immense-anchorage-35552.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
