const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const Moto = require("./database/motos.js");
const Images = require("./database/images.js")

mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://khalildh:khalildh@cluster0.r0etj.mongodb.net/myInfo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});
//require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
//const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "./public")));
 app.use(cors());
 app.use(express.json());

app.get("/", (req, res) => {
  //res.set("Content-Type", "text/html");
  res.send("Hello world !!");
});

app.get("/api/motos/:_id", (req, res) => {
  Moto.find({ _id: req.params._id }, (err, docs) => {
    if (err) res.send(err);
    res.send(docs);
    res.end();
  });
});

app.get("/api/motos", (req, res) => {
  Moto.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/api/images/:_id", (req, res) => {
  Images.find({ imageID: req.params._id }, (err, docs) => {
    res.send(docs);
    res.end();
  });
});

app.post("/api/motos", (req, res) => {
  Moto.create(req.body)
    .then((result) => {
      res.send(result);
      res.end();
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete("/api/motos/:_id", (req, res) => {
  Moto.deleteOne({ _id: req.params._id }, (err, docs) => {
    res.send(docs);
    res.end();
  });
});

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});
