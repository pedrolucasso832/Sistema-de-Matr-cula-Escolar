// Seleciona o formulário e os inputs
const form = document.querySelector(".form-container form");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");

// Função de validação simples
function validateLogin(email, password) {
  // Aqui você pode colocar validação real ou comparar com dados de teste
  if (email === "admin@escola.com" && password === "123456") {
    return true;
  }
  return false;
}

// Evento de submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Previne o reload da página

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (validateLogin(email, password)) {
    alert("Login realizado com sucesso!");
    // Redirecionar para outra página (simulado)
    // window.location.href = "dashboard.html";
  } else {
    alert("Email ou senha incorretos.");
  }
});

// Funcionalidade "Esqueceu a senha?"
const forgotPassword = document.querySelector(".forgot-password");
forgotPassword.addEventListener("click", () => {
  const email = prompt("Digite seu email para recuperar a senha:");
  if (email) {
    alert(`Enviamos um link de recuperação para ${email}`);
  }
});
