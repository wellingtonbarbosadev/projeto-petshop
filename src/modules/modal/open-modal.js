import dayjs from "dayjs";

const openModal = document.querySelector(".open-modal")
const modal = document.querySelector("#modal-1")
const dateElement = document.querySelector("#date");

export function closeModal() {
  modal.close()
}

openModal.addEventListener("click", ((e) => {
  const modalId = openModal.getAttribute("data-modal")
  const modal = document.getElementById(modalId)

  modal.showModal()
  dateElement.value = dayjs().format("YYYY-MM-DD")
}))

