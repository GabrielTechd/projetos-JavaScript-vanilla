// Obtém referências dos elementos
const tamanhoSenha = document.getElementById("length");
const checkboxMaiusculas = document.getElementById("includeUppercase");
const checkboxMinusculas = document.getElementById("includeLowercase");
const checkboxNumeros = document.getElementById("includeNumbers");
const checkboxSimbolos = document.getElementById("includeSymbols");
const botaoGerar = document.getElementById("generateBtn");
const campoSenha = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");

// Evento para copiar senha para a área de transferência
copyBtn.addEventListener("click", () => {
  const senha = campoSenha.value;
  if (!senha || senha === "Selecione ao menos uma opção") return;

  // Copia a senha para a área de transferência
  navigator.clipboard
    .writeText(senha)
    .then(() => {
      alert("Senha copiada para a área de transferência!");
    })
    .catch((err) => {
      alert("Falha ao copiar a senha: ", err);
    });
});

// Função para gerar a senha com base nas opções selecionadas
function gerarSenha() {
  let caracteres = "";

  // Define os conjuntos de caracteres disponíveis
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Adiciona os conjuntos de caracteres conforme as opções marcadas
  if (checkboxMaiusculas.checked) caracteres += maiusculas;
  if (checkboxMinusculas.checked) caracteres += minusculas;
  if (checkboxNumeros.checked) caracteres += numeros;
  if (checkboxSimbolos.checked) caracteres += simbolos;

  // Valida se ao menos uma opção foi selecionada
  if (caracteres.length === 0) {
    campoSenha.value = "Selecione ao menos uma opção";
    return;
  }

  // Gera a senha usando caracteres aleatórios
  let senha = "";
  for (let i = 0; i < tamanhoSenha.value; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }

  // Exibe a senha no campo de saída
  campoSenha.value = senha;
}

botaoGerar.addEventListener("click", gerarSenha);
