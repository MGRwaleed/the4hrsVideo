/* 
Routing is the process of mapping URLs (routes) to specific functions or logic that handle requests and send back responses.

There are four different routing methods in Express:
1. GET - GET is used to request data from a specified resource.
2. POST - POST is used to send data to a server to create a resource.
3. PUT - PUT is used to send data to a server to create/update a resource.
4. DELETE - DELETE is used to delete the specified resource.

Let us write code to demonstrate these routing methods.
*/

import express from "express"

const app = express()
const PORT = 5005

app.get('/', (req, res) => {
  res.send('Hello, World!')
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page');
});

// To run this file, use the command: nodemon app.js

//Dynamic Routing
// Dynamic Routing refers to the ability to create routes that can handle variable parameters in the URL. This allows for more flexible and reusable route definitions.
// Example: A route that handles user profiles based on user ID.

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
// In this example, :id is a dynamic parameter that can be accessed using req.params.id. When a request is made to /user/123, the response will be User ID: 123.


// Query Parameters
// Query parameters are a way to pass additional information to the server through the URL. They are typically used for filtering, sorting, or searching data.
// Example: A route that handles search queries.  

app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Search Query: ${query}`);
});

// In this example, the query parameter q can be accessed using req.query.q. When a request is made to /search?q=express, the response will be Search Query: express.


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});