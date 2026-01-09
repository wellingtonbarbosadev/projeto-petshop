import dayjs from "dayjs";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

export async function checkAvailableHours() {
  
  const dateInput = document.querySelector("#date");
  const selectedHour = document.querySelector("#time")

  const dailySchedules = await scheduleFetchByDay({ date: dayjs(dateInput.value).format("YYYY-MM-DD") })

  // Pega todas as options do datalist
  const hourOptions = document.querySelectorAll("#horas option");

  // Primeiro, reabilita todos os horários
  hourOptions.forEach((hour) => {
    hour.disabled = false;

    // Desabilita horários que ja passaram.
    let [hourPast] = hour.value.split(":")
    hourPast = dayjs(dateInput.value).add(hourPast, "hour")
    const isHourPast = dayjs().isBefore(hourPast, "hour")

    if (!isHourPast) {
      hour.disabled = true;
    }
  });

  // Depois, desabilita apenas os horários que têm agendamentos
  dailySchedules.forEach((schedule) => {
    hourOptions.forEach((hour) => {
      const [hourOnly] = hour.value.split(":");
      const optionDate = dayjs(dateInput.value)
        .hour(Number(hourOnly))
        .minute(0)
        .second(0);

      const scheduleDate = dayjs(schedule.when);
      
      if (scheduleDate.isSame(optionDate, "hour")) {
        hour.disabled = true;
      }
    });
  });
}

