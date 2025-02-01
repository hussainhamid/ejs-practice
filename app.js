const express = require("express");
const path = require("node:path");
const app = express();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["rose", "cake", "biff"];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { about: "This is the about page" });
});

const port = 3000;

app.listen(port, console.log(`listening to ${port}`));
