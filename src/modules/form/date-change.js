const selectedDate1 = document.querySelector("#date2")
const selectedDate = document.querySelector("#date")
const selectedHour = document.querySelector("#time")
import dayjs from "dayjs"
import { schedulesDay } from "../schedules/load.js"
import { checkAvailableHours } from "./check-available-hours.js"

selectedDate1.addEventListener("change", () => schedulesDay())
selectedDate.addEventListener("change", () => checkAvailableHours())

selectedHour.addEventListener("change", () => {
  console.log(selectedHour.value)
  let [hour] = selectedHour.value.split(":")
  hour = dayjs(selectedDate.value).add(hour, "hour")
  const isHourPast = dayjs().isBefore(hour, "hour")
  console.log(!isHourPast)
})