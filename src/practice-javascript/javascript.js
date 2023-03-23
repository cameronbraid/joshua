// function add(num1, num2) {
//   let added = (num1 + num2)
//   let result = square(added)
//   console.log(result, num1, num2)
// }

// function square(numToSquare, num1, num2) {
//   let answer = number * number;
//   let toReturn = `I added ${num1} and ${num2} together, squared them, and came up with the number ${numToSquare}.`
//   return toReturn
// }

// function onSuccess() {
//   console.log('Success!')
// }

// function onError() {
//   console.error('Error')
// }

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject()
//   }, 1000)
// })

// promise1.then(onSuccess)
// promise1.catch(onError)

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 2000)
// })

// promise2.then(onSuccess)
// promise2.catch(onError)

try {
  function thing() {
    let string = "thing";
    return string;
  }

  let thing = thing();

  console.log(thing);

  throw er;
} catch (er) {
  alert(er);
}
