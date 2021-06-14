const express = require("express")


const connectDB = require('./db/index')

require('dotenv').config()
const { PORT } = process.env
// or process.env.PORT



// connect to db
connectDB()

// initial express
const app = express()

// intialize express middleware
app.use(express.json({extended: false}))

// create a basic expresss route
app.get('/', (req, res) => {
          res.json(
                    {
                              message: "Welcome to tutoring app"
                    }
          )
})

// PORT
const port = process.env.PORT || PORT

// listen to connection
app.listen(port, () => {
          console.log(`App running on port: ${port}`);
})