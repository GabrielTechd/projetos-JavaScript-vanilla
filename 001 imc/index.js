// Obtém referência do botão de cálculo
const calcular = document.getElementById("calcular");

// Função para calcular o IMC e classificar o resultado
function imc() {
  // Obtém os valores dos campos de entrada
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("result");

  // Valida se todos os campos foram preenchidos
  if (nome !== "" && altura !== "" && peso !== "") {
    // Calcula o IMC: peso / (altura²) com 1 casa decimal
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    // Classifica o IMC de acordo com os critérios da OMS
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

    // Exibe o resultado com o nome, IMC e classificação
    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está classificado como: ${classificacao}.`;
  } else {
    // Mensagem de erro se algum campo não foi preenchido
    resultado.textContent = "Preencha todos os campos!";
  }
}

// Adiciona evento ao botão para executar o cálculo
calcular.addEventListener("click", imc);
