/**
|--------------------------------------------------
| Async Await Backend de node js
|--------------------------------------------------
*/
const promiseFunction = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world")
    } else {
      reject(new Error("hello Error"))
    }
  }, 1000)
})

async function asyncAwait() {
  try {
    const msg = await promiseFunction()
    console.log('message', msg)
  } catch (error) {
    console.log('error', error)
  }
}

asyncAwait()
