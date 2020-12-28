const express = require("express");
require("dotenv").config();
const port = process.env.NODE_PORT;
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const con = require("./config/conn.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(function (req, res, next) {
	req.con = con;
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const homeRouter = require('./routes/homeRouter');
const peopleRouter = require("./routes/peopleRouter");

app.use("/", homeRouter);
app.use("/people", peopleRouter);

app.listen(port, function () {
	console.log(`SERVER is Listening on PORT ${port}`);
});
