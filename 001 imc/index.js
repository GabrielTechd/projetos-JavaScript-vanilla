const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("result");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";
    if (valorIMC < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (valorIMC < 25) {
      classificacao = "Peso normal";
    } else if (valorIMC < 30) {
      classificacao = "Sobrepeso";
    } else if (valorIMC < 35) {
      classificacao = "Obesidade grau 1";
    } else if (valorIMC < 40) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está classificado como: ${classificacao}.`;
  } else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
