const candidato = {
  nome: "Mariana",
  area: "Front-End",
  habilidades: [
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub",
    "Lógica de Programação",
    "Kanban",
  ],
  disponibilidadeImediata: true,
};

class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirDetalhes() {
    return `Empresa: ${this.empresa} 
  Cargo: ${this.cargo}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, prioridade) {
    super(id, empresa, cargo, requisitos, salario, modalidade);

    this.prioridade = prioridade;
  }
}

const vagas = [
  new VagaFrontEnd(
    1,
    "TechStart",
    "Desenvolvedor Front-End Júnior",
    ["HTML", "CSS", "JavaScript", "Callback", "Async/Await"],
    2800,
    "Remoto",
    "Alta",
  ),
  new VagaFrontEnd(
    2,
    "CodeLab",
    "Estágio Front-End",
    ["HTML", "CSS", "JavaScript", "Kanban"],
    1800,
    "Híbrido",
    "Média",
  ),
  new VagaFrontEnd(
    3,
    "WebSolutions",
    "Programador JavaScript Júnior",
    ["JavaScript", "Arrays", "Objetos", "Funções"],
    3000,
    "Presencial",
    "Alta",
  ),
];

function calcularCompatibilidade(candidato, vaga) {
  const habilidadesEncontradas = vaga.requisitos.filter((requisito) =>
    candidato.habilidades.includes(requisito),
  );

  const habilidadesFaltantes = vaga.requisitos.filter(
    (requisito) => !candidato.habilidades.includes(requisito),
  );

  const percentual =
    (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

  let classificacao;

  if (percentual >= 80) {
    classificacao = "Alta compatibilidade";
  } else if (percentual >= 50) {
    classificacao = "Média compatibilidade";
  } else {
    classificacao = "Baixa compatibilidade";
  }

  return {
    habilidadesEncontradas,
    habilidadesFaltantes,
    percentual,
    classificacao,
  };
}

function exibirAnalise(candidato, vagas, callback) {
  for (let vaga of vagas) {
    const resultado = calcularCompatibilidade(candidato, vaga);

    const atendeTodos = vaga.requisitos.every((requisito) =>
      candidato.habilidades.includes(requisito),
    );

    const recomendacao = atendeTodos
      ? "Você atende todos os requisitos da vaga!"
      : `Para aumentar sua compatibilidade com essa vaga, priorize estudar ${resultado.habilidadesFaltantes.join(", ")}.`;

  console.log(`${vaga.exibirDetalhes()}
  Compatibilidade: ${resultado.percentual}%
  Habilidades Encontradas: ${resultado.habilidadesEncontradas.join(", ")}
  Classificação: ${resultado.classificacao}
  Para essa vaga faltam as habilidades: ${resultado.habilidadesFaltantes.join(", ")}
  Recomendação de Estudo: ${recomendacao}`);
  }

  callback()
}

function encontrarVaga(candidato, vagas) {
  const melhorVaga = vagas.reduce((melhor, atual) =>
    calcularCompatibilidade(candidato, atual).percentual >
    calcularCompatibilidade(candidato, melhor).percentual
      ? atual
      : melhor,
  );

  const resultado = calcularCompatibilidade(candidato, melhorVaga);

  console.log(`Vaga mais compatível: 
  ${melhorVaga.exibirDetalhes()}
  Compatibilidade: ${resultado.percentual}%`);

  console.log(`${candidato.nome}, sua análise foi finalizada. Revise suas habilidades faltantes e atualize seu plano de estudos.`);
}

function buscarVagas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

async function iniciarSistema() {
  console.log("Carregando vagas...");

  const vagasCarregadas = await buscarVagas();

  console.log("Vagas carregadas com sucesso. Análise iniciada.");

  exibirAnalise(candidato, vagasCarregadas, encontrarVaga);
}

iniciarSistema();
