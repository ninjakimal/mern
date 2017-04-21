# MERN (MongoDB, Express, React, Node) Example #

Install dependencies:
- `$ npm i axios express body-parser foreman nodemon marked mongoose --save`

Dependencies explained:
- Axios: let us use HTTP methods to communicate with our database.
- Express: provide a framework to set up our Node.js server.
- Body Parser: parse the incoming requests bodies for the info we are sending (gives us access to `req.body` which we will be using soon).
- Foreman: allows us to boot up our API and webpack-dev-server simultaneously.
- Nodemon: watches our server.js file for changes, then restarts it.
- Marked: to convert markdown syntax to html. I used this in place of Remarkable (which the FB tutorial uses)
- Mongoose: abstracts away the MongoDB boilerplate for a simple Schema solution.

Running:
- `$ npm run start-dev`
- App is accessible on: http://localhost:3000
- API is accessible on: http://localhost:3001/api

mLab:
- Create an account on mlab.com
  - account: pagefusionux
  - database: mern
  - username: mern
  - password: mern123

