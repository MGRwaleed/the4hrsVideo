import express from "express";
import multer from "multer";

const app = express();
const PORT = 5008;
const upload = multer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload.array());

//Handling Form Data
//Using Postman form urlencoded
// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     res.send ("Form DATA Received Successfully");
// });

//Using Postman Form

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send ("Form DATA Received Successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});