const selectedDate = document.querySelector("#date2")
import { schedulesDay } from "../schedules/load.js"

selectedDate.addEventListener("change", () => schedulesDay())