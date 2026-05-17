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
        Cargo: ${this.cargo}
        Modalidade: ${this.modalidade}
        Salário: R$${this.salario}
        Prioridade: ${this.prioridade}`;
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
    ["HTML", "CSS", "JavaScript", "GitHub"],
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
