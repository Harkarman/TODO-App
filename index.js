const express = require("express");
const path = require("path");
const app = express();
const port = 8000; //live deployment to port 8000

const db = require("./config/mongoose");
const Task = require("./models/task");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); //added extended:true to deal with error in terminal
app.use(express.static("assets"));

var taskList = [
  {
    description: "Get groceries",
    date: "02-02-2021",
    category: "Home",
  },
  {
    description: "Pay phone bill",
    date: "02-02-2021",
    category: "Personal",
  },
  {
    description: "Finish project",
    date: "02-02-2021",
    category: "School",
  },
];

app.get("/", function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("error in getting tasks from db");
      return;
    }
    return res.render("app", {
      title: "TODO App",
      task_list: tasks,
    });
  });
});

app.post("/create-task", function (req, res) {
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTask) {
      if (err) {
        console.log("error in creating the task");
        return;
      }
      return res.redirect("back");
    }
  );
  // taskList.push(req.body);
});

app.post("/delete-task", function (req, res) {
  Object.keys(req.body).forEach(function (key) {
    Task.findByIdAndDelete(key, function (err) {
      if (err) {
        console.log("Error in deleting an list from database", err);
        return;
      }
    });
  });
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`); //embed variable into string using interpolation
  }
  console.log(`Server is running on port: ${port}`);
});
