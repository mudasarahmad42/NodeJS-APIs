// Database connection
// Currently connected to mongodb atlas

const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION , {
}).then(() => {
    console.log('Connected Successfully');
}).catch((e) => {
    console.log(e);
});