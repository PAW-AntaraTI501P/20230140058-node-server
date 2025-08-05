const express = require("express");
const app = express();
const port = 3000;

const todoRoutes = require ("./route/todo.js");
const {todo} = require("./route/todo.js")

app.use(express.json());
app.use("/todos", todoRoutes);

app.use(express.json());
//atus ejs sebagai view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render( "index")  //render file index.ejs
});

app.get("/contact/", (req, res) => {
    res.render("contact"); //render file contact.ejs
});

//middleware untuk menangani 404
app.use((req, res, next) => {
    res.status(404).send("404 - Page Not Found");//render file 404.ejs
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
