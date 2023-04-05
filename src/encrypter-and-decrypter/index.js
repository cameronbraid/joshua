let secretCodeSwap = {
  a: "f",
  f: "a",
  b: "g",
  g: "b",
  c: "l",
  l: "c",
  d: "r",
  r: "d",
  e: "q",
  q: "e",
  h: "s",
  s: "h",
  i: "m",
  m: "i",
  j: "v",
  v: "j",
  k: "y",
  y: "k",
  ".": "?",
  "?": ".",
  ",": "!",
};

function encrypt(message) {
  message = message.toLowerCase();
  message = message.split("");
  message.reverse();
  message = message.map((el) => {
    return secretCodeSwap[el] || el;
  });
  let firstHalf = [];
  let secondHalf = [];
  for (let i = 0; i < message.length; i += 2) {
    firstHalf.push(message[i]);
    if (i + 1 < message.length) {
      secondHalf.push(message[i + 1]);
    }
  }
  message = firstHalf.concat(secondHalf);
  message = message.join("");
  message = btoa(message);
  return message;
}

function decrypt(message) {
  message = atob(message);
  message = message.split("");
  let firstHalf = message.slice(0, message.length / 2);
  let secondHalf = message.slice(message.length / 2);
  message = [];
  for (let i = 0; i < firstHalf.length; i++) {
    message.push(firstHalf[i]);
    if (i < secondHalf.length) {
      message.push(secondHalf[i]);
    }
  }
  message = message.map((el) => {
    return secretCodeSwap[el] || el;
  });
  message.reverse();
  message = message.join("");
  return message;
}

function encryptDom() {
  let message = document.getElementById("encrypt-text").value;
  message = encrypt(message);
  document.getElementById("encrypted-text").value = message;
}

function decryptDom() {
  let message = document.getElementById("decrypt-text").value;
  message = decrypt(message);
  document.getElementById("decrypted-text").value = message;
}

window.encryptDom = encryptDom;
window.decryptDom = decryptDom;

console.log(decrypt(encrypt("Hi")));
