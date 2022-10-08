# Staytuned Backend

This is a simple repository to showcase a price drop subscription functionality for an e-commerce store.

Main features:
- Built using NodeJS and [NestJS](https://github.com/nestjs/nest).
- [AdminJS](https://github.com/SoftwareBrothers/adminjs) for easy CRUD operations Control Panel (You can access it on "/admin" path with the credintials provided in app.module.ts).
- [TypeORM](https://typeorm.io) for managing the database entities with Postgres Database.
- [NestJSX](https://github.com/nestjsx/crud) for easy and plug-in-play CRUD operations and data filtering on top of services and controllers.
- Event-based structure with emitter and subscriber for handling price update for each product.

## Deployment
You can deploy this project on any web service with few configurations.

We will use render.com for a quick deployment, with the following steps:
- Create an account on render.com
- Create a web service node.
- Add the link of this repo in the field "Public Git repository".
- In the "Environment" field make sure you select: Node.
- In the "Build command" field add the following:
```sh
npm install; npm run build
```
- In the "Start Command" field add the following: 
```sh
npm run start:prod
```
- Then hit create, it will build an run the application.

# Create a PostgresSQL database
- From the new button at the top, select PostgresSQL.
- Create a database with the name: staytuned and username: staytuned.
- Make sure the database region is the same as the webservice region to be able to access the database connection internally.
- Once you have created the database, on the info page you will find a section called "connections" where we will use the info there in our environment variables.

# Configuring the environment variables
- On the webservice page you created, from the navigation bar on the left click on "Environment".
- Add the following environment variables with the following (also available in the example.env file):
```bash
# DATABASE
DB_TYPE=postgres
DB_USERNAME=postgres
DB_PASSWORD=123123
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=staytuned
DB_SYNC=true

# Web Client URL
CLIENT_URL=http://localost:4200
```
-- Change the values according the info in the PostgreSQL database you created earlier, for the web client URL you need to add the one you created for the frontend repo [here](https://github.com/montaserRahmani/staytuned-frontend).
- Hit save, then the deploy will be triggered automatically.


## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- Create a .env file based on the example.env file with the info based on your local environment and PostgreSQL server
```bash
# DATABASE
DB_TYPE=postgres
DB_USERNAME=postgres
DB_PASSWORD=123123
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=staytuned
DB_SYNC=true

# Web Client URL
CLIENT_URL=http://localost:4200
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
