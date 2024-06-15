export const AlertError = {
  element: document.querySelector(".error-wrapper"),
  open() {
    AlertError.element.classList.add("open")
  },
  close() {
    AlertError.element.classList.remove("open")
  },
}
