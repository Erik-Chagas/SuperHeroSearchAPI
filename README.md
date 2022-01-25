# Busca de heróis

Desafio Back-End do processo seletivo da AppMasters. Trata-se de uma API de busca de heróis por palavra-chave.
Foram implementados testes unitários e de integração (localizados em 'src/test/') utilizando-se as bibliotecas Jest e Supertest.

O projeto utiliza os dados da API pública https://akabab.github.io/superhero-api/api/

O deploy do projeto foi feito no Heroku.

* Link de Deploy: https://superherosearch-api.herokuapp.com/

# Principais tecnologias utilizadas
- Node.js
- Typescript
- Express
- Jest
- Supertest
- Heroku

# Rotas

| Métodos   | Rotas  | Descrição     
| :---------| :------|:---------------------------------- |
| GET       | /      | Retorna todos os heróis da API
| GET       | /search?key=palavra-chave | Retorna os heróis correspondentes da busca pela query "key" da url|

# Quem fez o projeto?

O projeto foi inteiramente produzido por mim, Erik Chagas Rozal, Desenvolvedor Web Full-Stack.
