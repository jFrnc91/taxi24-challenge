## Description
Challenge API created using:
- Framework: [NestJS](https://github.com/nestjs/nest)
- ORM: [Mikro ORM](https://docs.nestjs.com/recipes/mikroorm)
- Database: [SQLite](https://www.sqlite.org/index.html)

## Preparation
Run to install all dependencies (Node 18 or higher)
```bash
$ npm install
```
### Initialize the db
> [!IMPORTANT]
> If the following steps are omitted, the API won't work

This will create a local sqlite db called *taxi24-db.sqlite3* at the project's root
```bash
$ npm run create-db
```
Then this will seed the db with some initial data
```bash
$ npm run create-db
```

## Run
```bash
$ npm run start
```
This will start running the server at http://localhost:3000

A barebones [OpenAPI](https://www.openapis.org/what-is-openapi) documentation can be viewed at
> http://localhost:3000/api
## Test
> [!IMPORTANT]  
> Some tests are hardcoded, so running them the first time should make them work but not on later tries.
> To replicate the initial conditions again, all db data must be **deleted** and reseeded 
> using the `npm run seed-db` command
```bash
# e2e tests
$ npm run test:e2e
```