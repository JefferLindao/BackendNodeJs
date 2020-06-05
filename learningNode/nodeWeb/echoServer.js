/**
|--------------------------------------------------
| nodeWeb modulo http  y reto de la clase
|--------------------------------------------------
*/
const http = require('http')
/* const moment = require('moment')*/
const server = http.createServer()

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url == "/echo") {
    let body = []

    req
      .on('data', chunk => {
        body.push(chunk)
      })
      .on('end', () => {
        res.writeHeader(200, { 'Content-Type': 'text/plain' })
        body = Buffer.concat(body).toString()
        /* const dia = body
        const resp = moment(dia, "DD/MM/YYYY") */
        res.end(body/* resp.format("dddd") */)
      })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
console.log('Servidor en la url http://localhost:8001')
