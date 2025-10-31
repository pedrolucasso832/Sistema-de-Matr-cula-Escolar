const form = document.getElementById("formAluno");
const tabela = document.querySelector("#tabelaAlunos tbody");

function carregarAlunos() {
  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
  alunos.forEach(adicionarLinha);
}

function salvarAlunos() {
  const linhas = tabela.querySelectorAll("tr");
  const alunos = Array.from(linhas).map(linha => {
    const celulas = linha.querySelectorAll("td");
    return {
      nome: celulas[0].textContent,
      data: celulas[1].textContent,
      pai: celulas[2].textContent,
      mae: celulas[3].textContent,
      email: celulas[4].textContent,
      telefone: celulas[5].textContent,
      curso: celulas[6].textContent,
      turno: celulas[7].textContent
    };
  });
  localStorage.setItem("alunos", JSON.stringify(alunos));
}

function adicionarLinha(aluno) {
  const novaLinha = document.createElement("tr");
  novaLinha.classList.add("fade-in");

  novaLinha.innerHTML = `
    <td>${aluno.nome}</td>
    <td>${aluno.data}</td>
    <td>${aluno.pai}</td>
    <td>${aluno.mae}</td>
    <td>${aluno.email}</td>
    <td>${aluno.telefone}</td>
    <td>${aluno.curso}</td>
    <td>${aluno.turno}</td>
    <td>
      <button class="delete-btn">
        <img src="lixeira.png" alt="Excluir" class="icon-lixeira">
      </button>
    </td>
  `;

  novaLinha.querySelector(".delete-btn").addEventListener("click", () => {
    novaLinha.remove();
    salvarAlunos();
  });

  tabela.appendChild(novaLinha);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const aluno = {
    nome: document.getElementById("nome").value.trim(),
    data: document.getElementById("dataNascimento").value,
    pai: document.getElementById("nomePai").value.trim(),
    mae: document.getElementById("nomeMae").value.trim(),
    email: document.getElementById("email").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    curso: document.getElementById("curso").value,
    turno: document.getElementById("turno").value
  };

  if (!aluno.nome || !aluno.pai || !aluno.mae || !aluno.email || !aluno.curso || !aluno.turno) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  adicionarLinha(aluno);
  salvarAlunos();
  form.reset();
});

carregarAlunos();
