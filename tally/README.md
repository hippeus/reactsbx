# Tally

Reporting application build with good engineering practices (composition style).

## setup

```bash
tsc --init
yarn init -y
yarn add nodemon concurrently
yarn add @types/node
```

1. Adjust `tsconfig.json` to point `rootDir` and `outDir` to `./src` and `./build` respectively.

2. Modify `package.json` to include scripts for running program.

## build

```bash
yarn start
```
