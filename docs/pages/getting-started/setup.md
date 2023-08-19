# Set up

## Set up local development environment

### Install required softwares

1. Install Node.js 16(using nvm)
1. Install yarn v1


### Set up your IDE

This project is shipped with a pre-defined setting and
launch configuration for VS Code. All are stored in directory `.vscode`.

1. Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension for VS Code
1. Install [Visual Studio Code Commitizen Support](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)
extension for VS Code, it provide a user friendly interface for
making git commits in conventional commit format.
1. Install [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
extension for VS Code, it helps you create & review pull requests
without leaving VS Code.


# Repository Setup

If you decide to host your code to Github. There are recommended settings to maximise your development experience.

## General

### Default branch

Set to `master`

### Pull Requests

- Uncheck **Allow merge commits**. &#x1F4A1; *merge commits typically contain a larger and more complex set of changes, reviewing these changes may be less straightforward*
- Check **Allow squash merging**, **Default to pull request title and description** &#x1F4A1; *to simplify the commit history*
- Uncheck **Allow rebase merging**. &#x1F4A1; *avoid having multiple commits for the same change*
- Check **Allow auto-merge** (optional)
- Check **Automatically delete head branches**


## Branches

### Branch protection rules

Add a rule with following settings:

- **Branch name pattern**: set to `master`
- Check **Require a pull request before merging**
  - Check **Require approvals**
  - Check **Dismiss stale pull request approvals when new commits are pushed**
- Check **Require status checks to pass before merging**
  - Check **Require branches to be up to date before merging**
  - Search for status checks: **Lint** and **Unit test** from the search box
- Check **Require linear history**. &#x1F4A1; *good for reviewing commit history*


## Environments

Create 3 environments:

- `dev`: for development team to test
- `staging`: for QA team to test before releasing
- `production`: for customers to use

### `production`

- Check **Required reviewers**. Add people to review when deploying to this environment.
- In **Deployment branches**. Change to **Selected Branches**. Add deployment branch rule: `v?.?.?` (only release tags can be deployed to this environment)


### `dev` and `staging`

Configure as you want. It may not be strict as `production`.


## Secrets and variables

### Actions (Actions secrets and variables)

#### Create a Github Token for deployment

You can skip this step if you don't want to use the [release strategy](release-and-deploy.md) defined in this codebase.

First, create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with scopes: `repo` and `workflow`.

![](https://docs.github.com/assets/cb-139735/mw-1000/images/help/settings/userbar-account-settings.webp)

Copy the token. Then, create a **repository secret** named `RELEASE_TOKEN` with the value is the personal access token created above.

## Committing code

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

