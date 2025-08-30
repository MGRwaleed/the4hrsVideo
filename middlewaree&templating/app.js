import express from "express";

const app = express();
const PORT = 5007;

//Set EJS as default view engine
app.set("view engine", "ejs");

/* Middleware 
In Express.js (and similar frameworks), middleware is a function that sits between the request and response.

It can modify the request, process it, add extra logic, or stop it before sending the response.

Think of it like a checkpoint or a layer that every request goes through.

Types of Middleware in Express.js
 1. Application-Level Middleware
 2. Router-Level Middleware
 3. Error-Handling Middleware
 4. Built-in Middleware
 5. Third-Party Middleware
*/

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// // Middleware function to log request details
// app.use('/about',(req, res, next) => {
//   console.log('A new request received at:' +Date.now())
//   next(); // Call next() to pass control to the next middleware or route handler
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

//Excecuting in order

// app.use((req, res, next) => {
//   console.log("Start");
//     res.on("finish", () => {
//       console.log("End");
//     });
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Home Page");
//   console.log("Middle")
// });

//Error Handling Middleware
// app.get("/error", (req, res) => {
//     throw new Error("Something went wrong!");   
// });

// app.use((err, req, res, next) => {
//     console.error(err.message);
//     res.send("An error occurred: " + err.message);
// });


//Templating Engine
  app.get("/", (req, res) => {
    const user = "MaazBaby";
    res.render("index", { user }); 
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

