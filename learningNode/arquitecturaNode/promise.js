/**
|--------------------------------------------------
| Promesa con Backend de node js
|--------------------------------------------------
*/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world")
    } else {
      reject(new Error("hello Error"))
    }
  }, 1000)
})

promise
  .then(msg => msg.toUpperCase())
  .then(msg => console.log('message', msg))
  .catch(err => console.log('error', err))
