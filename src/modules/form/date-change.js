const selectedDate1 = document.querySelector("#date2")
const selectedDate = document.querySelector("#date")
import dayjs from "dayjs"
import { schedulesDay } from "../schedules/load.js"
import { checkAvailableHours } from "./check-available-hours.js"

selectedDate1.addEventListener("change", () => schedulesDay())
selectedDate.addEventListener("change", () => checkAvailableHours())
