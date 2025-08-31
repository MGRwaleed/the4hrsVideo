import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

// Create model
const Person = mongoose.model("Person", personSchema);

// Export default
export default Person;
