let button = document.querySelector(".Download")

let time = 15;


let Timer = async () => {
  button.style.display = "none"
  let div = await document.createElement("div")
  div.classList = await "timerDiv"

  let interval = setInterval(() => {
    time--
    if (time < 0) {
      clearInterval(interval)
      document.querySelector(".timerDiv").remove()
      button.style.display = ""

    }
    else {
      div.innerHTML = `Please Wai<span>${time}</span>Seconds`

    }


  }, 1000)


  await button.parentNode.appendChild(div)

}



Timer()