/**
|--------------------------------------------------
| Modulo Events de node js
|--------------------------------------------------
*/
const EventEmitter = require('events')

class Logger extends EventEmitter {
  execute(cb) {
    console.log('Before')
    this.emit('start')
    cb()
    this.emit('finish')
    console.log('After')
  }
}

const loger = new Logger()

loger.on('start', () => console.log('Starting'))
loger.on('finish', () => console.log('Finishing'))
loger.on('finish', () => console.log('It\'s Done'))

// loger.execute(() => console.log('hello world'))
loger.execute(() => setTimeout(() => console.log('hello world'), 1500))


