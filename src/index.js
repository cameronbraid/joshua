function whenClick(href, password="13.3.23") {
  document.getElementById(`main`).classList.add(`hidden`);
  document.getElementById(`password-container`).classList.remove(`hidden`);
  document.getElementById(`hidden-href`).value = href;
  document.getElementById(`hidden-password`).value = password;
  document.getElementById(`password`).focus();
  document.body.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
      checkPassword(href, password)
    }
  })
}

function checkPassword(href, password) {
  if (document.getElementById(`password`).value === password) {
    document.location = href; 
  } else {
    document.getElementById(
      `incorrect`
    ).innerHTML = `Incorrect password. Please try again.`;
  }
}

// function whenClickEncrypter(href) {
//   document.getElementById(`main`).classList.add(`hidden`);
//   document
//     .getElementById(`encrypter-password-container`)
//     .classList.remove(`hidden`);
//   document.getElementById(`hidden-value`).value = href;
//   document.getElementById(`encrypter-password`).focus();
//   document.body.addEventListener("keypress", (ev) => {
//     if (ev.key === "Enter") {
//       checkEncrypterPassword(href)
//     }
//   })
// }

// function checkEncrypterPassword(href) {
//   if (document.getElementById(`encrypter-password`).value === `1234`) {
//     document.location = href;
//   } else {
//     document.getElementById(
//       `incorrect-encrypter-password`
//     ).innerHTML = `Incorrect password. Please try again.`;
//   }
// }

window.whenClick = whenClick;
window.checkPassword = checkPassword;
// window.whenClickEncrypter = whenClickEncrypter;
// window.checkEncrypterPassword = checkEncrypterPasswor