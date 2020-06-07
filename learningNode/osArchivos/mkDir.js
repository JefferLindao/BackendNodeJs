const fs = require('fs')
fs.mkdir('platzi/escuelaJavascript/node', { recursive: true }, err => {
  if (err) {
    return console.log(err)
  }
})
