let i = 0;
let time = 0;

let div = document.createElement("div");
document.querySelector("body").appendChild(div);

function displayseconde() {
  if (i < 60) {
    div.textContent = "Hey ! Look I’m counting in secondes";
    div.textContent = div.textContent + " " + i + " secondes";
    i++;
  } else if ( i < 120 ) {
    div.textContent = "One-minute has passed";
    div.textContent = div.textContent + " " + i + " secondes";
    i++;
  } else if ( i < 400 ) {
    div.textContent = "Two-minute has passed";
    div.textContent = div.textContent + " " + i + " secondes";
    i++;
  } else {
    div.textContent = "Too much secondes has passed";
  }
}
setInterval(displayseconde, 1000);