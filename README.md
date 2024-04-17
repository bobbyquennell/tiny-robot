# Tiny Robot

## Prerequisites

- [TypeScript](https://www.typescriptlang.org/download) 5.4.5+
- [Node.js](https://nodejs.org/en/) LTS version (or later)
  
## How to Run

### 1. Git Clone

---

```bash
git clone https://github.com/bobbyquennell/tiny-robot.git && cd tiny-robot
```

### 2. bootstrap the project

---

 run below cmd in the project's ***root*** folder

 ```bash
 npm install && npm run build
 ```

### 3. Run the App

```bash
npm run start-dev 
```
you should see some results like this:
```
robot initial position: [0, 0]
after commands: N E S W, robot stopped at: [0, 0]
after commands: N E N E N E N E, robot stopped at: [4, 4]
```
## Run tests

---

 ```bash
 npm run test
 ```

## Technologies Included

- TypeScript + NodeJS
- ESLint config for Typescript and Javascript
- Prettier with auto formatting on save
- Husky + lint-Staged
- testing with `Jest` and enforce testing styles with `eslint-plugin-jest`
