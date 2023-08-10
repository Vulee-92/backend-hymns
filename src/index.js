const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

console.log("process.env.MONGO_DB", process.env.CLIENT_ID);
mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("connect is success");
  })
  .catch((err) => {
    console.log("Hello");
  });

app.listen(port, () => {
  console.log("Server is running in port", +port);
});
