const express = require("express");
const path = require("path");
const app = express();
const port = 8000; //live deployment to port 8000

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); //added extended:true to deal with error in terminal
app.use(express.static("assets"));

app.get("/", function (req, res) {
  return res.render("app");
});

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`); //embed variable into string using interpolation
  }
  console.log(`Server is running on port: ${port}`);
});
