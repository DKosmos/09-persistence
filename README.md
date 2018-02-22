![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: Vanilla REST API
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `start` script for running your server
  * create a `test` script for running your tests
* **server.js** - runs your application
* **lib/** - contains helper modules
* **model/** - contains resource model(s)
* **__test__** - contains route tests

## Feature Tasks

##### Minimum Requirements
For this assignment, you will be creating a single resource API from scratch.  The following minimum requirements should be taken into account when building this application.

* create an HTTP server using the native NodeJS `http` module
* create an object constructor that creates a _simple resource_ with at least 3 properties
  * include an id property that is set to a unique id (*hint:* you'll want to use `node-uuid`)
  * include two additional properties of your choice (ex: name, content, etc.)
* create a custom body parser module that uses promises to parse the JSON body of **POST** and **PUT** requests
* create a custom url parser module that returns a promise and uses the NodeJS `url` and `querystring` modules to parse the request url
* create a router constructor that handles requests to **GET**, **POST**, **PUT**, and **DELETE** requests
* create a storage module that will store resources by their schema type (ex: note) and id

## Server Endpoints
##### `/api/simple-resource-name`
* **POST:** should pass data as stringifed JSON in the body of a **POST** request to create a new resource
* **GET:** should pass `?id=<uuid>` as a querystring parameter to retrieve a specific resource (as JSON)
* **DELETE:** should pass `?id=<uuid>` in the querystring to **DELETE** a specific resource - this should also return a **204** status code with no content in the body

## Testing
##### `/api/simple-resource-name`
  * **GET:** test **404**
    * should respond with `not found` for valid requests made with an id that was not found
  * **GET:** test **400**
    * should respond with `bad request` if no id was provided in the request
  * **GET:** test **200**
    * should contain a response body for a request made with a valid id
  * **POST:** test **400**
    * should respond with `bad request` if no request body was provided or the body was invalid
  * **POST** test **200**
    * should respond with the body content for a post request with a valid body

## Stretch Goal
A **GET** request made to `/api/simple-resource-name` with no **?id=** should return an array of all of the ids for that resource.