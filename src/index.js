function whenClick(href) {
  content = `
    <label for="password">Enter password:</label>
    <br>
    <input type="password" id="password" placeholder="Password">
    <button onclick="checkPassword(${href});">Submit</button>
    <br>
    <div id="incorrect"></div>
    `;
  document.body = content;
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
