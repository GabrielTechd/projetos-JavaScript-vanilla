
const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(
  '[id^="key"]:not(#keyPlusMinus):not(#keyComma)',
);
const operatorButtons = document.querySelectorAll('[id^="operator"]');

const clearDisplayBtn = document.getElementById("clearDisplay");
const clearCalcBtn = document.getElementById("clearCalc");
const backspaceBtn = document.getElementById("backspace");
const equalBtn = document.getElementById("equalButton");
const plusMinusBtn = document.getElementById("keyPlusMinus");
const commaBtn = document.getElementById("keyComma");

let novoNumero = true;
let operadorAtual = null;
let numeroAnterior = null;

/* =====================
   FUNÇÕES UTILITÁRIAS
===================== */

const atualizarDisplay = (valor) => {
  if (novoNumero) {
    display.textContent = valor;
    novoNumero = false;
  } else {
    display.textContent += valor;
  }
};

const obterNumeroDisplay = () => Number(display.textContent.replace(",", "."));

const formatarNumero = (numero) => numero.toString().replace(".", ",");

const limparDisplay = () => {
  display.textContent = "0";
  novoNumero = true;
};

const limparCalculo = () => {
  limparDisplay();
  operadorAtual = null;
  numeroAnterior = null;
};

/* =====================
   NÚMEROS
===================== */

numberButtons.forEach((botao) => {
  botao.addEventListener("click", () => {
    atualizarDisplay(botao.textContent);
  });
});

/* =====================
   OPERADORES
===================== */

operatorButtons.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (!novoNumero) {
      calcular();
      operadorAtual = botao.textContent;
      numeroAnterior = obterNumeroDisplay();
      novoNumero = true;
    }
  });
});

/* =====================
   CÁLCULO
===================== */

const calcular = () => {
  if (operadorAtual === null || numeroAnterior === null) return;

  const numeroAtual = obterNumeroDisplay();
  let resultado = 0;

  switch (operadorAtual) {
    case "+":
      resultado = numeroAnterior + numeroAtual;
      break;
    case "−":
      resultado = numeroAnterior - numeroAtual;
      break;
    case "×":
      resultado = numeroAnterior * numeroAtual;
      break;
    case "/":
      resultado = numeroAtual === 0 ? 0 : numeroAnterior / numeroAtual;
      break;
  }

  display.textContent = formatarNumero(resultado);
  operadorAtual = null;
  numeroAnterior = null;
  novoNumero = true;
};

/* =====================
   AÇÕES ESPECIAIS
===================== */

equalBtn.addEventListener("click", calcular);

clearDisplayBtn.addEventListener("click", limparDisplay);

clearCalcBtn.addEventListener("click", limparCalculo);

backspaceBtn.addEventListener("click", () => {
  if (!novoNumero && display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    limparDisplay();
  }
});

plusMinusBtn.addEventListener("click", () => {
  const valor = obterNumeroDisplay() * -1;
  display.textContent = formatarNumero(valor);
  novoNumero = true;
});

commaBtn.addEventListener("click", () => {
  if (!display.textContent.includes(",")) {
    atualizarDisplay(",");
  }
});
