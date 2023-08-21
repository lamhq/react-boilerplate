### Committing code

There are three ways to commit code:
1. If you already installed the extension [Visual Studio Code Commitizen Support](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen),
Open the command panel (`ctrl+shift+p` or `command+shift+p`) and type 'conventional commit'.
Select the command and answer the questions afterwards (type, scope, subject, body, breaking changes, closed issues).
1. Run `git commit` command and you'll be prompted to fill out
any required commit fields (since this repo is commitizen friendly)
1. Run this command:
  ```bash
  npx cz
  ```






## How to deploy the app?

Please take a look at the document of release and deploy [here](docs/release-and-deploy.md).




# Notes

- utilizing existing features provided by the underlying frameworks/libraries
- no introducing new concepts, commands
- having a lean documentation

while try to avoid adding complexity as much as possible.

### Goals

This project aims to:

1. Maximize the development experience.
2. Provide solutions for solving common problems in React web applications (routing, authentication, error handling, data fetching, ...) .
3. Minimize the learning curve and introduce new concepts.
4. Be flexible and adaptable to change.
5. Act as a code snippet repository for developers. You can copy the code files of the feature you need to your project without using this boilerplate.


### Error tracking and Performance monitoring

This application has integrated with Sentry for tracking errors and monitoring runtime performance.

To configure, specify values for the two environment variables:

```bash
SENTRY_DSN=
SENTRY_ENVIRONMENT=
```


well organized, modularized code structure
flexible, easy to understand and change
lightweight, only include necessary features and packages