const phoneNumber = document.querySelector("#tutor-number")

phoneNumber.addEventListener("input", () => {
  let value = phoneNumber.value.replace(/\D/g, "")

  value = value.replace(/^(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{1})(\d{4})(\d)/, "$1 $2-$3");
  value = value.replace(/(-\d{4})\d+?$/, "$1");

  phoneNumber.value = value
})