## Node JS API - Practice APIs

![Node JS](nodejs.png)

> Started with ``` npm start init -y ```

> Installed expressJS ``` npm install express ```
  Express.js is a framework based on node.js for building web-application using principles and approaches of node.js

> Installed mongoose ``` npm install mongoose ```
  Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB. It is akin to an Object Relational Mapper (ORM) such as SQLAlchemy for traditional SQL databases. The problem that Mongoose aims to solve is allowing developers to enforce a specific schema at the application layer

> Installed nodemon ``` npm install nodemon ```
  Installed this so we dont have to restart server everytime we made any changes in development. this package takes cares of this

> Installed dotenv ``` npm install dotenv ```
  Installed this so we can use environemnt variables declared in .env files

> Installed joi ``` npm install joi ```
  Installed this so we can validate requests

> Installed body-parser ``` npm install body-parser ```
  Installed this so we can receive requests in json format. Place this at the start of the middleware declaration in app.js file.

> Installed bcryptJS ``` npm install bcryptJS ```
  Installed this so we can encrypt and decrypt passwords

> Installed jsonwebtoken ``` npm install jsonwebtoken ```
  Installed this so we can create JWT Token that can be used for accessing all the requests that requires
  authentication. Created a middleware that can be used in routes.