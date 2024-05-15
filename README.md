# flow-sync
This is a simple web application that helps users of Timewarrior and Taskwarrior to sync their entries between existing instances and mobile application [Flow](https://github.com/benciks/flow-native). This project was built as part of bachelor thesis.

## Recommended Usage
It is recommended to create a docker-compose file if you intend to run this project in production. This repository contains a Dockerfile that can be used, but it is important to note that the environment variables used in the Dockerfile are not meant to be used in production.

## Project Setup
To develop locally, you need to have a running instance of the [Flow backend](https://github.com/benciks/flow-backend) running on your machine.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
