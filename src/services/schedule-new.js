import dayjs from "dayjs";
import { apiConfig } from "./api-config";
import { schedulesDay } from "../modules/schedules/load.js";

export async function scheduleNew({id, tutorName, petName, tutorNumber, descriptionService, when}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, tutorName, petName, tutorNumber, descriptionService, when})
    })
    
    alert("Agendado com sucesso.")
    schedulesDay()

  } catch (error) {
    console.log(error)
    alert("Ocorreu um erro ao realizar o agendamento.")
  }
}