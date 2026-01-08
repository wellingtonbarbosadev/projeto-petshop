import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"
import dayjs from "dayjs"

const selectedDate = document.querySelector("#date2")

export async function schedulesDay() {
  let date = selectedDate.value
  date = dayjs(date)

  const dailySchedules = await scheduleFetchByDay({ date })

  console.log(dailySchedules)
  schedulesShow({ dailySchedules })
}