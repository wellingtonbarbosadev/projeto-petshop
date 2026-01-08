import { apiConfig } from "./api-config.js";
import { schedulesDay } from "../modules/schedules/load.js";

export async function scheduleRemove({ scheduleId }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${scheduleId}`, {
      method: "DELETE"
    })

    alert("Agendamento removido com sucesso.")
    schedulesDay()
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível remover o agendamento.")
  }
}