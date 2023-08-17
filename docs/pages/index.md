# Overview

This is a starter repository that provides the essential setup
and code snippets for React Single Page Application projects.


## Why another React Boilerplate?

There are so many React Boilerplates out there that provide
great support and more features than this project, but they often:

- Provide a lot of features and add dependencies that you don't need.
You must either check each dependency to know if you need it
or come with a lot of unused dependencies that slow down
the installation process.
- Lack customization options by abstracting many things.
When it comes to customization, digging in reveals a lot of
complexity that is difficult to understand.
- Have a long learning curve and extensive documentation.

This project aims to be lightweight, easy to customize and
understand. It strives to provide a great development experience
and assists developers in quickly jumping in and starting work
without worrying about standards, workflow processes, or principles.


## Feature highlights

### Optimize for development experience

This codebase is built up from Vite which has a faster build time,
a dev server with extremely fast Hot Module Replacement, and
many other great [benefits](https://vitejs.dev/guide/features.html).

Furthermore, it also comes with:

- Typescript support with path alias, dependency injection pattern
using decorator.
- A pre-configured linter (ESLint) for React Typescript code standard.
- IDE settings and instructions for running and debugging
the application inside VSCode.
- Configured test runner (Jest) and end-to-end test framework (cypress).


### Automated commit check

- Source code is automatically checked on commit by ESLint to
ensure code follow [Airbnb's style guide](https://www.npmjs.com/package/eslint-config-airbnb-typescript).
- Committed messages are automatically checked to conform to
[Conventional Commit format](https://conventionalcommits.org/).
- Upon commit, the branch name is also verified automatically to
ensure compliance with application's [branching strategy](dev-workflow.md).


### CI/CD setup

- A Github Action is configured to run unit tests and
check code style for each open pull request.
- Release and deployment tasks become easy by accessing Github
and approving deployment, no need to manually checkout the code
or run any commands.


### Demo and example codes

- Unit test (with mocking)
- End-to-end test
- Authentication
- Data fetching
- Data mutation
- Image lazy loading
- and more...


## Requirements

- Node.js version 16 or higher
- Package manager: yarn v1
- IDE: work best with VSCode


## Tech stack

- Application type: Single Page Application
- Language: React v18 with Typescript v4
- UI Framework: Material UI v5
- Routing: React Router v6
- Form library: React hook-form
- Unit test runner: Jest v29
- End-to-end test framework: cypress v12
- Linter: ESLint
- CI/CD platform: Github Actions


## Reference

If you wondering how to setup the codebase from scratch,
here're some guides to follow:

Create initial code:

- https://vitejs.dev/guide/

Set up Git hook:

- https://typicode.github.io/husky/#/?id=automatic-recommended
- https://commitlint.js.org/#/guides-local-setup?id=guide-local-setup
- https://www.npmjs.com/package/git-branch-is

Code Linter:

- https://typescript-eslint.io/getting-started/
- https://www.npmjs.com/package/eslint-config-airbnb
- https://www.npmjs.com/package/eslint-config-airbnb-typescript

Code Formatter:
- https://prettier.io/docs/en/integrating-with-linters.html
- https://github.com/prettier/eslint-plugin-prettier#recommended-configuration

Routing:

- https://reactrouter.com/en/main/start/concepts

Unit Test:

- https://jestjs.io/docs/getting-started
- https://kulshekhar.github.io/ts-jest/docs/
- https://www.npmjs.com/package/jest-mock-extended
- https://testing-library.com/docs/react-testing-library/intro/
- https://github.com/testing-library/react-hooks-testing-library
- https://jestjs.io/docs/tutorial-jquery

End-to-end Test:

- https://docs.cypress.io/guides/getting-started/installing-cypress
- https://docs.cypress.io/guides/tooling/typescript-support

CICD:

- https://github.com/google-github-actions/release-please-action

