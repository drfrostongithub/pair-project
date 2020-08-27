const express = require('express')
const app = express()
const port = 3045


const routes = require('./routes')
const session = require('express-session');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: "pairprojectphase1",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000
  }
}))

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})