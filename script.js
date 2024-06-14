// vars and consts
const forms = document.querySelector("form")
const inputWeight = document.querySelector("#peopleWeight")
const inputHeight = document.querySelector("#peopleHeight")

const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal-wrapper .title span")
const modalBtnClose = document.querySelector(".modal button.close")

forms.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = imc(weight, height)
  modalMessage.innerText = result

  modalWrapper.classList.add("open")
}

// events
modalBtnClose.addEventListener("click", function () {
  modalWrapper.classList.remove("open")
})

// functions
function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
