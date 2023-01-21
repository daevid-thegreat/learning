const url = require('url')

const myURL = new URL('https://daevidthegreat.works/images/my-cv.pdf?location=Nigeria&ln=en')

// Serialized URL
console.log(myURL.href)

// HOST (root domain)
console.log(myURL.host)

// HOSTNAME (does not get port)
console.log(myURL.hostname)

// Pathname
console.log(myURL.pathname)

// Serialized Query
console.log(myURL.search)

// Search Parameter
console.log(myURL.searchParams)

// Add Parameter
myURL.searchParams.append('browser', 'chrome')
console.log(myURL.searchParams)

// Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))