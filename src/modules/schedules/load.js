import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"
import dayjs from "dayjs"

const selectedDate = document.querySelector("#date2")

export async function schedulesDay() {
  let date = selectedDate.value
  selectedDate.min = dayjs().format("YYYY-MM-DD")
  date = dayjs(date)

  const dailySchedules = await scheduleFetchByDay({ date })

  schedulesShow({ dailySchedules })
}