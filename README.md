#  MERN Stack

## A Musala javascript test React, Redux, Express & MongoDB



## Tech Stacks used/learned throughout building this project

- React with Functional Components & Hooks

- React router

- React-Bootstrap UI library

- Component level state & props

- Environment variables

- Project deployment

## Run locally:

#### Install dependencies

```
npm install

cd frontend && npm install
```

#### Create .env file

```
Under the project root directory, create a `.env` file and include the following vars:

NODE_ENV = ...
PORT = ...
my_db = ...


```


#### Start the application (both Express server and React frontend):

```
npm run dev
```

#### To load the sample data into or clear all data from the Mongo database with the seeder script

```
npm run data:import

npm run data:destroy
```

## Dev Tools (Optional)

### To enable hot reload

`nodemon` npm module

### To start up Frontend + Backend concurrently

`concurrently` npm module

### To customize console logging style

`colors` npm module

### Logger

`morgan` npm module to log client requests on the server console

### Redux Dev Tools

`redux-devtools-extension` npm module + Google Chrome `Redux DevTools` extension

## Environment Variables Config

`dotenv` npm module

- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

## React Frontend

### Theme

`Bootswatch - LUX` with `react-bootstrap` npm module

### Icons

`font-awesome` CDN from cdnjs.com

### Titles & Meta

`react-helmet`: A document head manager for React

### SPA Routes

`react-router-dom` + `react-router-bootstrap`: Integration between React Router v4 and React Bootstrap.

### State Management

`React Hooks (useState, useEffect, etc.)` for component-level state management

`Redux Pattern` for global-level state management with `redux`, `react-redux` and `redux-thunk` npm modules

### Handle Payment

`react-paypal-button-v2` npm module for handling PayPal payments

## NodeJS Backend

### ES Module

- To use `ES Module` instead of `CommonJS Module`:  
  Add `“type”: “module”` to the `package.json` for your project, and Node.js will treat all .js files in your project as ES modules.

### File Upload

`Multer` npm module for hanlding file uploading

## Database

### MongoDB

`MongoDB Atlas` + `mongoose` npm module


## Deployment

### Heroku

#### Heroku Login & Create app

```
heroku login

heroku create APP_NAME
```

#### Create Procfile

```
web: node backend/server.js
```

