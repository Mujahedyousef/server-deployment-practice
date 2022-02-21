# server-deployment-practice

This Repo for CI/CD.

# Notes for Task

* ## The mission

* >Build server and test, for test this server from during  CI/CD.
* > Createing new two app on Heroku.

-------

## Steps the task

1) Create new Repo on Github and selected (Add .gitignore => Node).
2) Go to Action add Workflows name file (node.js.yml) and edit (name: Node.js CI ) then add new branch behind main.
3) Got this repo to working locally.
4) make files (touch server.js index.js).

5) Install node packages and any package used :

* npm init -y.
* npm i express.
* npm i dotenv.

 6) Work server on server.js
and export (app, function start) to index.js
become for any file can import.

 7) Create new folder (tests => create inside it file (server.test.js)).
 8) install package (npm install --save-dev jest) & (npm i -D supertest), to work fake run my server and testing.
 9) Create all tests and scenarios to solve.
use => (describe) and (it) for all checked.
10) Change in package.json test to =>( "scripts": {
    "test": "jest --coverage --verbose").

 > ## Now i can go to terminal and make locally test

11)ACP but without merging the dev branch with the main, I want to merge after checking the dev branch in deploy Heroku, it was pass i can merge with main branch.

--------

## Links

|   Name            | Link |
| ----------- | ----------- |
| Heroku dev app      |   [Heroku dev app](https://mujahed-server-deploy-dev.herokuapp.com/)   |
| heroku prod app | [Heroku prod app](https://mujahed-server-deploy-prod.herokuapp.com/)       |
| Github Action | [Github Action](https://github.com/Mujahedyousef/server-deployment-practice/actions)       |
| pull request | [pull request](https://github.com/Mujahedyousef/server-deployment-practice/commits/main)        |
