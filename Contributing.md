# How to setup Repo in your local system?

Steps to follow

## 1. Fork Repo

## 2. Clone Your personal Repo copy created using FORK

git clone https://github.com/[YOUR_GITHUB_USERNAME]/[REPO_NAME].git

## 3. Installing all npm packages

Navigate to the directory and run the following code. This will install all the dependencies you need.
The project has been created using yarn package manager.

```
npm install
OR
yarn install
```

_Note_ : You can have different localhost other than 3000, use that in that case.

_Never push credentials to GitHub_

## Pushing changes or making changes

For pushing your updates make a new branch in this format:

```
git checkout -b "branch name"
```

Make changes and

```
git add .
git commit -m "comments"
git push -u origin "branch name"
```

## Create a PR

Click on contribute and perform a Pull Request. Describe the changes you have made and attach relevant screenshots.
**NOTE:** Keep in mind, make your PRs to the **dev** branch only.
Follow the Pull Request Template strictly.
Thank you for contributing :)
