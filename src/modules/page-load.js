import { schedulesDay } from "./schedules/load.js"
import dayjs from "dayjs"
const date = document.querySelector("#date2")

document.addEventListener("DOMContentLoaded", () => {
  date.value = dayjs().format("YYYY-MM-DD")
  schedulesDay()
})