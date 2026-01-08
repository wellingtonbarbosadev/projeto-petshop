import { scheduleRemove } from "../../services/schedule-remove.js"
const list = document.querySelector("ul")

list.addEventListener("click", (item) => {
  if (item.target.classList.contains("remove-schedule")) {
    item = item.target.closest("li")
    const scheduleId = item.getAttribute("data-id")
    console.log(scheduleId)
    
    const isConfirm = confirm("Você tem certeza que deseja remover esse agendamento?")
    if (isConfirm) scheduleRemove({ scheduleId })
  }
  
})