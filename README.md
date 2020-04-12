<h1 align="center">Welcome to GoStack11 · NodeJs api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is an example of api to handle repositories (in memory) just for practice.

### ✨ [Demo](https://gostack11-nodejs-api.herokuapp.com/)

## Install

```sh
yarn install
```

## Usage

```sh
yarn run start
```

## Run tests

```sh
yarn run test
```

## API

```diff
! Description: Return an array with repositories

+ [METHOD : path] GET : /repositories

Result: []

-

! Description: Add a new repo object

BODY: {
  "title": String,
  "url": String,
  "techs": Array[]
}

+ [METHOD : path] POST : /repositories

Result: {
  "id": String,
  "title": String,
  "url": String,
  "techs": Array[],
  "likes": Number
}

-

! Description: Modify an existing repo by id

PARAMS: "id"
BODY: {
  "title": String,
  "url": String,
  "techs": Array[]
}

+ [METHOD : path] PUT : /repositories/:id

Result: {
  "title": String,
  "url": String,
  "techs": Array[],
}

-

! Description: Delete an existing repo by id

PARAMS: "id"

+ [METHOD : path] DELETE : /repositories/:id

Result: status(204) / No Content

-

! Description: Increments "likes" by 1 of an existing repo by id

PARAMS: "id"

+ [METHOD : path] POST : /repositories/:id/like

Result: {
  "id": String,
  "title": String,
  "url": String,
  "techs": Array[],
  "likes": Number
}
```

## Author

👤 **Matias Gummá**

- Github: [@matigumma](https://github.com/matigumma)
- LinkedIn: [@matiasgumma](https://linkedin.com/in/matiasgumma)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
