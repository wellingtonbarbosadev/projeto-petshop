import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { closeModal } from "../modal/open-modal.js";

const form = document.querySelector("form");
const name = document.querySelector("#tutor-name");
const pet = document.querySelector("#pet-name");
const number = document.querySelector("#tutor-number");
const service = document.querySelector("#description-service");
const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = String(new Date().getTime())
  const tutorName = name.value.trim()
  const petName = pet.value.trim()
  const tutorNumber = number.value
  const descriptionService = service.value.trim()
  const date = dateElement.value
  const time = timeElement.value
  
  const [hour] = time.split(":")
  const when = dayjs(date).add(hour, "hour")
  
  scheduleNew({
    id,
    tutorName,
    petName,
    tutorNumber,
    descriptionService,
    when,
  });

  closeModal()
});
