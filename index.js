
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
}

function save() {
  let saved = count  + " - "
  saveEl.textContent += saved
  let normal = 0
  countEl.textContent = normal
  count = 0
}

