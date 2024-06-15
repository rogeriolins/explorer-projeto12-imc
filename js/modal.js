export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-wrapper .title span"),
  buttonClose: document.querySelector(".modal button.close"),
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}

// events
Modal.buttonClose.addEventListener("click", () => {
  Modal.close()
})

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Modal.close()
  }
})

//
// Poderia ser em forma reduzida mas se houver outro onkeydown
// ele é sobreposto
//
// windows.onkeydown = handleKeyDown
// function handleKeyDown(event) {...}
//
