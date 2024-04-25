# React + TypeScript + Vite Boilerplate
A frontend boilerplate for single-page applications.

## Requirements
- [Node.js 20+](https://nodejs.org/en)


## Installed packages

- Vite 5
- React 18
- TypeScript
- React Router 6
- Linting, Formatting & Git hook
  - ESLint
  - Prettier 
  - Husky
  - Lint-Staged
- UI
  - styled-components
- Translation: i18next, react-i18next, i18next-browser-languagedetector
- Testing
  - Vitest
  - React Testing Library: @testing-library/react, @testing-library/jest-dom, @testing-library/user-event

Feel free to install or remove packages as you prefer.
Make sure to update packages to the latest version manually when needed.


## How to use

### Start dev server
```bash
nvm use
npm install
npm run dev
```
Dev server will start automatically at http://localhost:8080.


### Preview production build
```bash
npm run build
npm run preview
```

### Run testing
```bash
npm run test
```


## File Structure

### Folders/Files

| Path                 | Description                          |
| -------------------- | ------------------------------------ |
| `dist/`              | Built files               |
| `public/`              | Static files that will be copied as-is to `/dist` after build process              |
| `src/`               | Sources                              |
| `src/assets/`        | Static assets                        |
| `src/assets/translation/{lang}.json`  | Translation json files                           |
| `src/examples/`    | Test examples                 |
| `src/App.tsx`    | App component with Providers                |
| `src/i18n.ts`    | i18next init file                |
| `src/index.css`    |  Root css                |
| `src/main.tsx`    |  Root component                |
| `src/test-setup.ts`    |  Testing set up file                |
| `src/vite-env.d.ts`    |  TypeScript global type definitions                |

### Project Configuration

| File/Folder Name             | Description                       |
| --------------------- | --------------------------------- |
| `.husky`     | Husky configuration folder        |
| `.editorconfig`       | Text editor configuration file        |
| `.eslintrc.cjs`        | ESLint configuration file             |
| `.gitignore`          | Git ignored file list             |
| `.npmrc`              | NPM configuration file                |
| `.nvmrc`              | NVM configuration file                |
| `.prettierrc.cjs`         | Prettier configuration file            |
| `tsconfig.json`          | TypeScript configuration file                 |
| `tsconfig.node.json`          | TypeScript configuration file for  `vite.config.ts`               |
| `vite.config.ts`      | Vite configuration file                |
