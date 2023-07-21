const express=require("express");
const app=express();
const morgan = require("morgan")
const connectDB = require("./config/db")
const cors = require("cors")
const dotenv = require("dotenv");
const addRoute = require("./routes/add")
const subtractRoute = require("./routes/subtract")
const multiplyRoute = require("./routes/multiply")
const divideRoute = require("./routes/divide")
const exponentRoute = require("./routes/exponent")
const historyRoute = require("./routes/history")



dotenv.config();
app.use(cors());
connectDB()
app.use(express.json());
app.use(morgan("common"));

//Routes
app.use('/add',addRoute)
app.use('/subtract',subtractRoute)
app.use('/multiply',multiplyRoute)
app.use('/divide',divideRoute)
app.use('/exponent',exponentRoute)
app.use('/history',historyRoute)

//Server listening
app.listen(3000,()=>{
    console.log("Server is running at PORT 3000");
})