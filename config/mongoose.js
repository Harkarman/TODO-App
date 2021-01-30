const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tasks_list_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //connect to database //added {useNewUrlParser: true, useUnifiedTopology: true} to deal with errors in terminal

const db = mongoose.connection; //acquire connection to check if it is successful

db.on("error", console.error.bind(console, "error connecting to db")); //handle error

db.once("open", function () {
  console.log("Successfully connected to database");
});
