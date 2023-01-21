// Import the path module from NodeJS modules
const path = require('path')

//Get file path with filename
//console.log(__filename);

// Get file directory without filename
//console.log(__dirname);

// Get a base file name
console.log(path.basename(__filename));

// Get Directory name
console.log(path.basename(__dirname));

// Get file extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__filename, 'test', 'hello.html'))
