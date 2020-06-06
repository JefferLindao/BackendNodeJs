const fs = require('fs')
const file = fs.createWriteStream('./big')

for (let i = 0; i < 1e6; i++) {
  file.write('Hola mundo como te encuentras quiero saber algo de ti')
}

file.end()
