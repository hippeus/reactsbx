# React Learning Curve

Sandbox for React.js and typescript learnings.

Most code is a lose variation or exact copy of Udemy courses made by Stephen Grider:

1. [Modern React with Redux](https://www.udemy.com/course/react-redux)
2. [Typescript: The Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide)

## prerequisites

shell

```bash
brew install nvm yarn
```

typescript

```bash
yarn add global typescript ts-nodejs
```

## javascript general purpose libraries

`axios` - REST style network request client

`redux` - in-mem store based state manager

`body-parser @types/body-parser` - http body parser middleware

`cookie-session @types/cookie-session` - http session middleware

`faker.js` - convenience library with fake data sets

`redux-thunk` - redux wrapper for async calls

## React.js specific libraries

```bash
yarn add react-redux @types/react-redux redux-thunk
```

## tools

```bash
yarn global add <tool>
```

`create-react-app` - basic react app boilerplate generator

`parcel-bundler` - typescript in the browser

`json-server` - third party json file based data storage

`nodemon` - node.js hot reloading

`concurrently` - js jobs parallel runner
