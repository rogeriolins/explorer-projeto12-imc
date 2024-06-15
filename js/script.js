import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./tools.js"

// vars and consts
const forms = document.querySelector("form")
const inputWeight = document.querySelector("#peopleWeight")
const inputHeight = document.querySelector("#peopleHeight")

forms.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  Modal.message.innerText = result
  Modal.open()
}
