const inputTemp = document.getElementById("inputTemp");
const selectFrom = document.getElementById("inputUnit");
const selectTo = document.getElementById("outputUnit");
const btnConvert = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

btnConvert.addEventListener("click", () => {
  const temp = Number(inputTemp.value);

  if (isNaN(temp)) {
    resultDiv.textContent = "Digite uma temperatura válida.";
    return;
  }

  const fromUnit = selectFrom.value;
  const toUnit = selectTo.value;

  let result = temp;

  // Primeiro: converte tudo para Celsius
  if (fromUnit === "F") {
    result = ((temp - 32) * 5) / 9;
  } else if (fromUnit === "K") {
    result = temp - 273.15;
  }

  // Depois: de Celsius para o destino
  if (toUnit === "F") {
    result = (result * 9) / 5 + 32;
  } else if (toUnit === "K") {
    result = result + 273.15;
  }

  resultDiv.textContent = `${temp}°${fromUnit} = ${result.toFixed(2)}°${toUnit}`;
});
