<h1 align="center">
  <img alt="Logo" src="https://appgobarberprod.s3.us-east-2.amazonaws.com/7d0ac3aedd63eeeeb0e7-logo_iw1v9f.svg" width="200px">
</h1>

<h3 align="center">
  Projeto API GoBarber
  <!-- Express Application for GoBarber project -->
</h3>

<p align="center">
O Melhor jeito de marcar o seu serviço!
<!-- The best way to schedule your service! -->

</p>

<p align="center">
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/90sRehem/gobarber-backend?style=plastic" />
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/90sRehem/gobarber-backend?color=brightgreen&style=plastic" />
  <a href="https://www.linkedin.com/in/jonathan-rehem-7101171a5/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by Jonathan Rehem" src="https://img.shields.io/badge/made%20by-90sRehem-important?style=plastic">
  </a>

<a href="https://github.com/90sRehem/gobarber-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/90sRehem/gobarber-backend?style=plastic">
  </a>


  <a href="https://github.com/90sRehem/gobarber-backend/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/90sRehem/gobarber-backend?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/90sRehem/gobarber-backend?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">licença</a>
</p>

<!-- <p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=PontoLoc&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fpontoloc-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p> -->

<!-- ## 💇🏻‍♂️ About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

To see the **web client**, click here: [GoBarber Web](https://github.com/EliasGcf/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/EliasGcf/gobarber-mobile)

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/90sRehem/gobarber-backend.git && cd gobarber-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork 90sRehem/gobarber-backend
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-backend

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch -->

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feito com ♥ por [Jonathan Rehem](https://www.linkedin.com/in/jonathan-rehem-7101171a5/)
