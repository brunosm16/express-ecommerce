## Running this application

  ### Pre-Requisites

 1. MySQL installed in your machine 
 
 ### Environment
 To run this project properly is necessary to have a .env file with the correct configuration variables, below that is a example of how you can create a env file to run this project :
 

    ## Database
    
    DB_DIALECT=mysql
    DB_HOST=
    DB_DATABASE=    
    DB_USERNAME=
    DB_PASSWORD=
    
    ## Server
    
    SERVER_PORT=
    CORS_ORIGIN_URL=
    
    ## Auth
    JWT_SECRET=
    

### Running in Development 

 1. Clone this project with `git clone`
 2. Install all dependencies with `yarn install` 
 3. Run migrations with `yarn db:migrate:dev`
 4. Run on terminal the command `yarn start:dev` to run application in development node

### Running Tests

    yarn db:migrate:test
    yarn test 
    yarn test:post-test

### Running Linters and Code Formatters
	
**Prettier | Code formatter**  

    yarn prettier:check
    yarn prettier:fix

**ESLint | Linter**

    yarn lint
    yarn eslint:fix