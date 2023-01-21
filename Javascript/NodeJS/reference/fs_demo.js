const fs = require('fs')
const path = require('path')

// Create a folder
/*fs.mkdir(path.join(__dirname, '/test'), {},
    function(err){
    if(err) throw err
    console.log('Folder Created...')
})*/

// Create a folder
/*fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world\n', {},
    function(err){
        if(err) throw err
        console.log('File written')
    })
*/
// Append File
/*fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello peeps\n', {},
    function(err){
        if(err) throw err
        console.log('File written')
    })*/

// Read File
/*fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8',
    function(err, data) {
        if (err) throw err
        console.log(data)
    }) */

// Read File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'),
    function(err, data) {
        if (err) throw err
        console.log('File renamed')
    })