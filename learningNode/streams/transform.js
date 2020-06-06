const { Transform } = require('stream')

/**
 * 
 * @param {cadena} str transformamos una cadena de texto a camelCase
 */
function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(camelCase(chunk.toString()))
    callback()
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)
