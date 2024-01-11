// import express package
const express = require("express");

// activate express package on app
const app = express();

app.get("/", async (req, res, next) => {
  try {
    res.send("Welcome to the backend for my Access-A-Ride 2.0 Application!");
  } catch (error) {
    //logs the error and responds/response http 500 code error
    console.error("Something went wrong", error);
    // wont catch asynchronous coding errors/bugs we need middleware for that
    res.status(500).send("Internal Server Error http:500");
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

module.exports = app;
