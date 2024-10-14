const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const { Connect } = require("./config/connectToDb");
require("dotenv").config();

//connection to DB
Connect();

//Init App
const app = express();
exports.app = app;

// json parser 
app.use(express.json());

app.use(morgan("tiny"));

// Init routes
app.use("/api", userRouter);
// Running the Server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => 
console.log(
    `Server is running in ${process.env.NODE_ENV} mode  on port ${PORT}`
)
);
