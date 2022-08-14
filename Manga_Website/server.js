var express = require("express");

var mangaController = require("./controllers/mangaController");
var characterController = require("./controllers/characterController")

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route("/manga").get(mangaController.getAllManga);
app.route("/character").get(characterController.getAllCharacters);

app.listen(8080, "127.0.0.1");
console.log("web server running @ http://127.0.0.1:8080");