import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
var text = "Enter your name below 👇";

app.get("/", (req, res) => {
  res.render("index.ejs", {
    heading : text, 
  });
});

app.post("/submit", (req, res) => {
  let fullName = req.body["fName"] + req.body["lName"];
  text = "Entered name has " + fullName.length + " letters";
  res.render("index.ejs", {
    heading : text,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
