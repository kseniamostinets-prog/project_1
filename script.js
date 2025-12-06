const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const calcBtn = document.getElementById("calc");
const result = document.getElementById("result");

function formatMoney(value) {
  return value.toFixed(2);
}

calcBtn.addEventListener("click", () => {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value);
  const people = Number(peopleInput.value);

  if (!bill || bill < 0) {
    result.textContent = "Введите сумму счёта (число больше 0).";
    return;
  }
  if (tipPercent < 0) {
    result.textContent = "Чаевые не могут быть отрицательными.";
    return;
  }
  if (!people || people < 1) {
    result.textContent = "Количество людей должно быть 1 или больше.";
    return;
  }

  const tipSum = bill * (tipPercent / 100);
  const total = bill + tipSum;
  const perPerson = total / people;

  result.textContent =
    `Чаевые: ${formatMoney(tipSum)} | Итого: ${formatMoney(total)} | На человека: ${formatMoney(perPerson)}`;
});
