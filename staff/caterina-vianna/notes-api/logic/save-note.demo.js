require("dotenv").config();

const { MongoClient } = require("mongodb");
const context = require("./context");
const saveNote = require("./save-note");
const mongoose = require("mongoose");

const {
  env: { MONGODB_URL },
} = process;

mongoose.connect(
  (MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() =>
      saveNote(
        "5fb7f43bcf65c468175af431",
        undefined,
        "Hello, World!",
        ["hello", "world"],
        "private",
        console.log
      )
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log("ended"))
  //saveNote('5fb7f43bcf65c468175af431', '5fbb7dc5f6eb5f8ec3d55dd1', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
  //saveNote('5fb7f43bcf65c468175af432', '5fbb7dc5f6eb5f8ec3d55dd1', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
  // saveNote('5fb7f43bcf65c468175af431', '5fbb7dc5f6eb5f8ec3d55dd2', 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
);
