# exemplo-ci-cd-api

## Sumário

- [exemplo-ci-cd-api](#exemplo-ci-cd-api)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app é uma demonstração do uso de integração e entrega contínuas utilizando o [workflow](https://github.com/mdccg/ci-cd-cep-api/blob/test/.github/workflows/node.js.yml) intitulado "Node.js" e pré-configurado pelo próprio [GitHub Actions](https://github.com/features/actions). O fluxo ouve os commits feitos na branch `test` e faz deploy no domínio de teste do projeto Vercel para testar o que foi commitado. Após o deploy, os testes de ponta a ponta contidos no arquivo [`ceps.postman_collection.json`](./ceps.postman_collection.json) são executados. Se todos os testes passarem, a branch `test` é mesclada com a branch `main` e é feito um segundo deploy, desta vez no domínio de produção.

Foi utilizado como base o repositório [mdccg/postal-code-api](https://github.com/mdccg/postal-code-api), o qual já contém os respectivos testes prontos e um app de exemplo para testar.

Este foi o nono repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação III.

| [&larr; Repositório anterior](https://github.com/mdccg/exemplo-ci-cd-api) |
|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Framework web | [Express.js](https://expressjs.com/pt-br/) |
| Virtualização de banco de dados | [Docker](https://www.docker.com/) |
| Banco de dados remoto | [MongoDB Atlas](https://www.mongodb.com/cloud) |
| Framework de teste | [Postman](https://www.postman.com/) |
| Hospedagem | [Vercel](https://vercel.com/) |
| Fluxo de integração contínua | Node.js |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- [Docker](https://docs.docker.com/engine/install/).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Com o Docker instalado, execute o comando abaixo para levantar o _container_ Docker com o respectivo banco de dados virtualizado. Certifique-se de estar no diretório do arquivo `docker-compose.yml`;

```console
$ docker-compose up -d
```

O parâmetro `-d` serve para desocupar o shell de comando logo após a execução do comando. É uma boa convenção, ao encerrar a execução do app, derrubar o _container_ levantado através do comando:

```console
$ docker-compose down
```

Mas, não se preocupe. As tuplas inseridas no banco de dados não serão deletadas com a derrubada do _container_.

5. Execute o seguinte comando para executar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

6. Para executar os testes, instale a dependência [`newman`](https://npmjs.com/package/newman) globamente e execute o seguinte comando:

```console
$ npm i -g newman
$ newman run ceps.postman_collection.json
```