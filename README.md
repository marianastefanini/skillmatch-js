# Skillmatch JS
Mini-Projeto Avaliativo da turma de Programação Front-End React - Turma 02

## Sobre o projeto

O SkillMatch JS é um simulador de compatibilidade entre uma pessoa candidata e vagas fictícias de Front-End Júnior.

## Objetivo

O sistema compara as habilidades do candidato com os requisitos das vagas e realiza uma análise automática para:

- identificar quais habilidades do candidato atendem aos requisitos da vaga;
- identificar quais habilidades ainda precisam ser desenvolvidas;
- calcular o percentual de compatibilidade entre candidato e vaga;
- classificar a compatibilidade de acordo com o percentual obtido:

| Percentual | Classificação |
|------------|----------------|
| 80% a 100% | Alta compatibilidade |
| 50% a 79% | Média compatibilidade |
| 0% a 49% | Baixa compatibilidade |

- gerar recomendações de estudo com base nas habilidades não encontradas;
- identificar automaticamente a vaga mais compatível com o perfil do candidato.

## Funcionalidades

- Cadastro de candidato;
- Cadastro de vagas;
- Simulação de carregamento das vagas (Promise + async/await);
- Cálculo de compatibilidade;
- Identificação de habilidades faltantes;
- Recomendação de estudo;
- Busca da vaga mais compatível;
- Contador de análises (Closure);

## Tecnologias utilizadas

- JavaScript;
- VS Code;
- Git;
- GitHub;
- GitHub Desktop.

## Extensões utilizadas

- Code Runner
- Prettier

## Ferramentas de apoio

Durante o desenvolvimento foram utilizadas ferramentas de apoio para pesquisa, esclarecimento de dúvidas e organização do projeto, como documentação, materiais do curso e IA.

## Como executar

Este projeto não precisa de Node.js.

Você pode executar diretamente no navegador:

1. Abrir o navegador Google Chrome.
2. Pressionar F12 ou Ctrl + Shift + J.
3. Abrir a aba Console.
4. Copiar o código do arquivo skillmatch.js.
5. Colar no console.
6. Pressionar Enter.

## Conceitos utilizados

- Lógica de Programação;

### Estruturas de dados

- Objetos;
- Arrays;
- Strings;
- Números;
- Booleanos;

### Estruturas de controle

- if / else;
- Operador ternário;
- for...of;

### Métodos de array

- filter();
- every();
- reduce();

### Programação Orientada a Objetos

- Classes;
- Construtores;
- Herança;
- this;

### Conceitos avançados

- Callback;
- Closure;
- Promise;
- async/await;

## Variáveis 

No projeto foi priorizado o uso de const e let.

- `let`: cria variáveis que permitem alteração de valor.
- `const`: cria variáveis cuja referência não deve ser reatribuída.
- `var`: possui escopo de função, diferente de let e const que possuem escopo de bloco, e pode causar comportamentos inesperados em projetos maiores, por isso atualmente `let` e `const` são mais recomendados.

## Como a internet funciona

A internet é uma rede global que conecta diversos dispositivos e permite a troca de dados e informações. 

Grande parte dos sistemas e aplicações utiliza a arquitetura cliente-servidor para realizar essa comunicação.

Ao acessar um site ou sistema, o cliente (navegador ou aplicação) envia uma requisição para um servidor. O servidor recebe a solicitação, processa as informações e retorna uma resposta, contendo todos os recursos necessários para montar a página ou executar o sistema, como códigos, textos, imagens e outros dados.

Fluxo simplificado:

Cliente → Requisição → Servidor → Resposta → Cliente

### Arquitetura Cliente-Servidor

Neste projeto, esse conceito foi simulado utilizando `Promise` e `async/await`.

A função `buscarVagas()` representa uma requisição feita pelo cliente para buscar vagas em um servidor fictício. Foi utilizado `setTimeout()` para simular o tempo de espera até o recebimento dos dados.

Fluxo aplicado no projeto:

Sistema inicia  
↓  
Solicita vagas (buscarVagas())  
↓  
Simula resposta do servidor (Promise)  
↓  
Carrega vagas (async/await)  
↓  
Inicia análise de compatibilidade

## Estrutura do projeto

```
skillmatch-js/
│
├── skillmatch.js
└── README.md
```
## Links

- Repositório: [GitHub] (https://github.com/marianastefanini/skillmatch-js)
- Kanban: [GitHub Projects] (https://github.com/users/marianastefanini/projects/1/views/1)
- Vídeo: [Google Drive] (https://drive.google.com/drive/folders/1OwIZ61D0f1z-0QJ7YwrpwPeum6JUuwTH?usp=sharing)