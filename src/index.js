function whenClick(href) {
  document.getElementById(`main`).classList.add(`hidden`);
  document.getElementById(`password-container`).classList.remove(`hidden`);
  document.getElementById(`hidden-value`).value = href;
}

function checkPassword(href) {
  if (
    document.getElementById(`password`).value === `manfred von richthofen1!`
  ) {
    document.location = href;
  } else {
    document.getElementById(
      `incorrect`
    ).innerHTML = `Incorrect password. Please try again.`;
  }
}

window.whenClick = whenClick;
window.checkPassword = checkPassword;
