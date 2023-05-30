# React Boilerplate

## Overview

This is a starter repository that provides the essential components for React Single Page Application projects. The goal is to keep things simple and include only what is needed for most projects, such as:

- A pre-configured linter for code style checking
- IDE settings for running and debugging the application
- Documentation for development workflow and branching strategy
- CI/CD setup for running unit tests, releases, and deployments
- Pre-defined code for common tasks like routing, form handling, global state management, i18n, ...
- ...

Additionally, there are separate branches for specific features, each containing the corresponding code, such as:

- File uploading
- Role-based access control
- Chart
- ...

## Tech stack

- Application type: Single Page Application
- Language: Typescript/React.js
- UI Framework: Material UI
- Package manager: yarn (v1)
- IDE: VS Code
- Linter: ESLint
- Repository hosting service: Github
- CI/CD platform: Github Actions


## Highlights

### Built on Vite

Vite is a modern web development build tool that utilizes modern JavaScript features and native ES modules to provide an optimized web development experience.

It enables a fast and powerful workflow that enhances productivity for developers.


### Automated code checking

- Source code is automatically checked on commit by ESLint to ensure code follow [Airbnb's style guide](https://github.com/airbnb/javascript).
- Committed messages are automatically checked to conform to [Conventional Commit format](https://conventionalcommits.org/).
- Upon commit, the branch name is also verified automatically to ensure compliance with application's [branching strategy](dev-workflow.md).


### CI/CD setup

- A Github Action is configured to run unit tests and check code style for each open pull request.
- Release and deployment tasks become easy by accessing Github and approving deployment, no need to manually checkout the code or run any commands, see [Release and Deploy](docs/release-and-deploy.md).


### Error tracking and Performance monitoring

This application has integrated with Sentry for tracking errors and monitoring runtime performance.

To use your own account, specify the values for `SENTRY_DSN` and `SENTRY_ENVIRONMENT` environment variables:

```bash
SENTRY_DSN=
SENTRY_ENVIRONMENT=
```

### Implemented sample code

- Unit test (with mocking)
- End-to-end test
- Authentication
- CRUD operation
- Authorization: Role-based access control
- File upload (AWS S3)
- I18n


## Installation

1. Install project's dependencies:
    ```bash
    yarn install
    ```
1. Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension for VS Code


## Run & debug the app with VS Code

1. Run this command in terminal to start the dev server:
    ```bash
    yarn dev
    # you can access the web page at http://localhost:3001
    ```
1. Select the **Run and Debug** icon in the **Activity Bar** on the side of VS Code
    ![](https://code.visualstudio.com/assets/docs/editor/debugging/run.png)
1. Select the configuration named **Attach debugger to Chrome** using the Configuration dropdown in the **Run and Debug** view.
1. Once you have your launch configuration set, start your debug session with `F5`.

Note: you can run the command `yarn dev` automatically by adding a Keyboard Shortcut to VS Code. From the Command Palette (`Cmd+Shift+P`), choose `Preferences: Open Keyboard Shortcuts (JSON)`, paste the config here to your key binddings JSON file:

```json
// Place your key bindings in this file to override the defaultsauto[]
[
  {
    "key": "cmd+alt+u",
    "command": "workbench.action.terminal.sendSequence",
    "args": {
      "text": "yarn dev\u000D"
    }
  }
]
```

This will run `yarn dev` in the terminal every time you press `Cmd + Option + U`.


## Run & debug Unit test with VS Code

To run and debug unit tests with VS Code, follow these steps:

1. Open the file containing the unit test in the editor.
2. Select the **Run and Debug** icon located in the **Activity Bar** on the side of VS Code.
3. Select the configuration named **Run test for current file** from the Configuration dropdown found in the **Run and Debug** view.
4. Set your launch configuration accordingly and start your debug session by pressing `F5`.

![Debugging Session](https://code.visualstudio.com/assets/docs/editor/debugging/debug-session.png)


## How to start coding?

Please take a look at the document of branching strategy and development workflow [here](docs/dev-workflow.md).


## How to deploy the app?

Please take a look at the document of release and deploy [here](docs/release-and-deploy.md).


## Reference

Create initial code:
- https://vitejs.dev/guide/

Set up Git hook:

- https://typicode.github.io/husky/#/?id=automatic-recommended
- https://commitlint.js.org/#/guides-local-setup?id=guide-local-setup
- https://www.npmjs.com/package/git-branch-is

Set up Linter, Formatter:

- https://typescript-eslint.io/getting-started/
- https://www.npmjs.com/package/eslint-config-airbnb
- https://www.npmjs.com/package/eslint-config-airbnb-typescript
- https://prettier.io/docs/en/integrating-with-linters.html
- https://github.com/prettier/eslint-plugin-prettier#recommended-configuration

Set up testing:
- https://jestjs.io/docs/getting-started
- https://kulshekhar.github.io/ts-jest/docs/
- https://www.npmjs.com/package/jest-mock-extended
- https://testing-library.com/docs/react-testing-library/intro/
- https://github.com/testing-library/react-hooks-testing-library
- https://jestjs.io/docs/tutorial-jquery

CICD:

- https://github.com/google-github-actions/release-please-action
