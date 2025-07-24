const Converter = document.getElementById("converter");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amoutInput = document.getElementById("amount");
const Result = document.getElementById("amount");

window.addEventListener("load", fetchCurrencies);
Converter.addEventListener("submit", Convertercurrency);

async function fetchCurrencies() {
  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );
  const data = await response.json();
  console.log(data);

  const currecyOptions = Object.keys(data.rates);
  console.log(currecyOptions);

  currecyOptions.forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromCurrency.appendChild(option1);
  });
}

function Convertercurrency() {}
