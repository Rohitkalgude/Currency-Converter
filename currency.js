const Converter = document.getElementById("converter");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amoutInput = document.getElementById("amount");
const Result = document.getElementById("result");

window.addEventListener("load", fetchCurrencies);
Converter.addEventListener("submit", Convertercurrency);

async function fetchCurrencies() {
  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );
  const data = await response.json();
  //   console.log(data);

  const currecyOptions = Object.keys(data.rates);
  //   console.log(currecyOptions);

  currecyOptions.forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toCurrency.appendChild(option2);
  });
}

async function Convertercurrency(e) {
  e.preventDefault();

  const Amount = parseFloat(amoutInput.value);
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;

  if (Amount < 0) {
    alert("Please enter the valid amount");
    return;
  }

  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${fromCurrencyValue}`
  );
  const data = await response.json();

  const rate = data.rates[toCurrencyValue];
  const converterAmount = (Amount * rate).toFixed(2);

  Result.textContent = `${Amount} ${fromCurrencyValue} = ${converterAmount} ${toCurrencyValue}`;
}
