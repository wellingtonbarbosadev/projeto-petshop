import dayjs from "dayjs";
import { checkAvailableHours } from "../form/check-available-hours.js";

const openModal = document.querySelector(".open-modal")
const modal = document.querySelector("#modal-1")
const dateElement = document.querySelector("#date");
const date2Element = document.querySelector("#date2");

export function closeModal() {
  modal.close()
}

openModal.addEventListener("click", ((e) => {
  const modalId = openModal.getAttribute("data-modal")
  const modal = document.getElementById(modalId)

  checkAvailableHours()
  modal.showModal()
  dateElement.value = dayjs(date2Element.value).format("YYYY-MM-DD")
}))

