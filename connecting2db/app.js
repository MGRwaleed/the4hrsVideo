import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import "./config/db.js";
import Person from "./models/person.js";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
});

//Inserting Data
app.post("/data", async (req, res) => {
console.log(req.body);
const newPerson = new Person({ name: "Waleed", age: 21, city: "Hyderabad" });
await newPerson.save();
res.send("Data Received");
});

//Updating Data
app.put("/data", async (req, res) => {
    const {Name} = req.body;
    const person = await Person.find({Name})
    console.log(person);
    res.send("Data Updated");
});

//Deleting Data
app.delete("/data/:id", async (req, res) => {
    const {id} = req.params.id;
    await data.findByIdAndDelete(id);
    res.send("Data Deleted");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});