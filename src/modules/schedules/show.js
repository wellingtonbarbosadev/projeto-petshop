import dayjs from "dayjs"

const periodMorning = document.querySelector("#period-morning")
const periodAfternoon = document.querySelector("#period-afternoon")
const periodNight = document.querySelector("#period-night")
 
export function schedulesShow({ dailySchedules }) {
  periodMorning.innerHTML = ""
  periodAfternoon.innerHTML = ""
  periodNight.innerHTML = ""
  
  dailySchedules.map((schedule) => {

    const div = document.createElement("div")

    const hours = document.createElement("strong")
    hours.classList.add("label-medium")
    hours.textContent = dayjs(schedule.when).format("HH:mm")

    const petName = document.createElement("span")
    petName.classList.add("pet-name")
    petName.classList.add("label-small")
    petName.textContent = schedule.petName

    const petOwner = document.createElement("span")
    petOwner.classList.add("pet-owner")
    petOwner.classList.add("paragraph-small")
    petOwner.textContent = schedule.tutorName

    div.append(hours, petName, petOwner)

    
    const serviceDescription = document.createElement("p")
    serviceDescription.classList.add("service-description")
    serviceDescription.classList.add("paragraph-small")
    serviceDescription.textContent = schedule.serviceDescription

    const removeSchedule = document.createElement("span")
    removeSchedule.classList.add("remove-schedule")
    removeSchedule.classList.add("paragraph-small")
    removeSchedule.textContent = "Remove agendamento"


    const item = document.createElement("li")
    item.setAttribute("data-id", schedule.id)
    item.append(div, serviceDescription, removeSchedule)

    const hour = dayjs(schedule.when).hour()
    if (hour < 13) {
      periodMorning.appendChild(item)
    } else if (hour >= 13 && hour <= 18) {
      periodAfternoon.appendChild(item)

    } else {
      periodNight.appendChild(item)
    }
  })
}