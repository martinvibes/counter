
const SAVE_ELEMENT = document.getElementById("save-el")
const COUNT_ELEMENT = document.getElementById("count-el")
let count = 0

function incrementCount() {
  count += 1
  COUNT_ELEMENT.innerText = count
}

function subtractCount() {
  if (count <= 0) {
    return 0
  }
  count -= 1
  COUNT_ELEMENT.textContent = count
}

function saveCountValue() {
  let saved = count  + " - "
  let normal = 0
  COUNT_ELEMENT.textContent = normal
  count = 0
  localStorage.setItem("count", SAVE_ELEMENT.textContent += saved)
}

