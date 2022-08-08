let word = "Yes Yes Yes Yes";
let i = 0;

let div = document.createElement("div");
document.querySelector('body').appendChild(div);

function displayYes() {
  if (i < word.length) {
    div.textContent = div.textContent + word[i];
    i++;
    console.log(div.textContent);
  } else {
    clearInterval;
  }
}
setInterval(displayYes, 1000);