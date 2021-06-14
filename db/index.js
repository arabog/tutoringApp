// cr8 a connection function for mongodb
const mongoose = require('mongoose')
require('dotenv').config()

const {MONGO_URI} = process.env

// start a local mongodb server connection
const connectDB = () => {
          mongoose.connect(MONGO_URI, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
          })

          .then(() => {
                    console.log('MongoDB connected ....');
          })

          .catch((err) => {
                    console.error(err.message);

                    // exit with failute
                    process.exit(1)
          })
}

/*

// async mongoose connection
const connectDB = async () => {
          try {
                   await mongoose.connect(MONGO_URI, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
          })
          } catch (err) {
                    console.error(err.message);

                    // exit with failute
                    process.exit(1)
          }
}
*/

module.exports = connectDB