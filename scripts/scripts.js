const openModal = document.querySelector(".open-modal")
const modal = document.querySelector("#modal-1")

openModal.addEventListener("click", ((e) => {
  const modalId = openModal.getAttribute("data-modal")
  const modal = document.getElementById(modalId)

  modal.showModal()
}))