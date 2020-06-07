const fs = require('fs')

fs.copyFile('cuerpoSinAlma.txt', 'cuerpoSinAlmaCopy.txt', err => {
  if (err) {
    console.log(err)
  }
  console.log('cuerpoSinAlma.txt fue copiado como cuerpoSinAlmaCopy.txt')
})
