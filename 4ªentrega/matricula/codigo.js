const formTurma = document.getElementById("formTurma");
const tabelaTurmas = document.querySelector("#tabelaTurmas tbody");

function criarLinha(nome, codigo, turno) {
  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td>${nome}</td>
    <td>${codigo}</td>
    <td>${turno}</td>
    <td><button class="delete-btn">Excluir</button></td>
  `;

  linha.querySelector(".delete-btn").addEventListener("click", () => {
    linha.remove();
  });

  return linha;
}

formTurma.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nomeTurma").value.trim();
  const codigo = document.getElementById("codigoTurma").value.trim();
  const turno = document.getElementById("turnoTurma").value;

  const novaLinha = criarLinha(nome, codigo, turno);
  tabelaTurmas.appendChild(novaLinha);

  formTurma.reset();
});
