import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"
import dayjs from "dayjs"

const selectedDate = document.querySelector("#date2")
const selectedDate1 = document.querySelector("#date")

export async function schedulesDay() {
  let date = selectedDate.value
  selectedDate.min = dayjs().format("YYYY-MM-DD")
  selectedDate1.min = dayjs().format("YYYY-MM-DD")
  date = dayjs(date)

  const dailySchedules = await scheduleFetchByDay({ date })

  schedulesShow({ dailySchedules })
}