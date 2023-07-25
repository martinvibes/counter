
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
}

function sub() {
  if (count <= 0) {
    return 0
  }
  count -= 1
  countEl.textContent = count
}

function save() {
  let saved = count  + " - "
  let normal = 0
  countEl.textContent = normal
  count = 0
  localStorage.setItem("count", saveEl.textContent += saved)
  console.log( localStorage.getItem("count") )
}

