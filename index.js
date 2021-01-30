const express = require("express");
const app = express();
const port = 8000; //live deployment to port 8000

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`); //embed variable into string using interpolation
  }
  console.log(`Server is running on port: ${port}`);
});
