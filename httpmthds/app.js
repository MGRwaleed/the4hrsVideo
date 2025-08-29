/*
We have already seen how to handle GET requests using Express.
Now, let's explore how to handle other HTTP methods such as POST, PUT, and DELETE.
Let's write code to demonstrate these HTTP methods. 
*/

import express from "express"
const app = express()
const PORT = 5006
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello, World!')
});

app.post('/data', (req, res) => {
  const userData = req.body;
    console.log("📥 Incoming /data payload:", userData);
    res.send('Data received successfully');
});

// PUT method to update data

app.put('/data/:id', (req, res) => {
    const dataID = req.params.id;
    const updatedData = req.body;
    console.log(`🔄 Updating data with ID: ${dataID}`, updatedData);
    res.send(`Data with ID: ${dataID} updated successfully`);
});

// DELETE method to delete data

app.delete("/data/:id", (req, res) => {
    const dataID = req.params.id;
    console.log(`🗑️ Deleting data with ID: ${dataID}`);
    res.send(`Data with ID: ${dataID} deleted successfully`);
});

//Using Multiple parameters in URL

app.get("/product/:category/:id", (req,) => {
    const category = req.params.category;
    const productId = req.params.id;
    console.log(`Category: ${category}, Product ID: ${productId}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});