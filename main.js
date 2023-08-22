let button = document.querySelector(".Download")

let time = 15;


let div = document.createElement("div")
div.innerHTML = `Please Wait...<span>${time}</span> Seconds`

button.style.display = "none"
div.classList = "timerDiv"
button.parentNode.appendChild(div)