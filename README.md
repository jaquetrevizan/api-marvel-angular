<h1 align="center"> API Marvel Angular</h1>
<p align="center">Aplicação Angular para consumir a API da Marvel e listar personagens em tempo real.</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Angular-10-DD0031?logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/RxJS-6.6-purple?logo=reactivex" alt="RxJS">
  <img src="https://img.shields.io/badge/Material-UI-blue?logo=angular" alt="Angular Material">
</p>

---

## Objetivo

Este projeto foi desenvolvido como estudo prático de **consumo de APIs externas em Angular**, explorando:
- Integração com a **API da Marvel**.
- Organização de componentes e serviços.
- Uso de **RxJS** para lidar com requisições assíncronas.
- Interface com **Angular Material** e **Flex Layout**.

---

## Funcionalidades

- Listagem de personagens da API da Marvel.  
- Renderização dinâmica com **Observables**.  
- Estrutura modular com `CharactersComponent` e `CharactersApiService`.  
- Navbar simples para navegação entre seções.  

---

## Tecnologias Utilizadas

- [Angular 10](https://angular.io/) — Framework frontend.  
- [RxJS](https://rxjs.dev/) — Programação reativa para lidar com streams de dados.  
- [Angular Material](https://material.angular.io/) — UI Components.  
- [Flex Layout](https://github.com/angular/flex-layout) — Layout responsivo.  
- [TypeScript](https://www.typescriptlang.org/) — Linguagem base.  

---

## Instalação e Execução

Para rodar este projeto localmente, siga os passos:

```bash
# Clone o repositório
git clone https://github.com/jaquetrevizan/api-marvel-angular.git

# Acesse o diretório do projeto
cd api-marvel-angular

# Instale as dependências
npm install

# Execute a aplicação
ng serve
````

A aplicação ficará disponível em `http://localhost:4200/`.

> Este projeto requer uma chave da **API da Marvel**.
> Crie uma conta em [developer.marvel.com](https://developer.marvel.com/) e adicione sua chave em `characters-api.service.ts`.

---

## Aprendizados

Durante o desenvolvimento deste projeto, trabalhei com:

* Consumo de API REST externa no Angular.
* Boas práticas de componentização.
* Programação reativa com **RxJS**.
* UI responsiva com Angular Material e Flex Layout.

---

## Dúvidas & Sugestões

- Se tiver alguma ideia para melhorar este projeto ou encontrar algum problema, fique à vontade para abrir uma issue aqui no repositório.
- Para dúvidas mais diretas, você também pode me escrever em: trevizan.jaqueline@gmail.com.
