require("dotenv").config();
const mongoose = require("mongoose");
const retrieveUser = require("./retrieve-user");

mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => retrieveUser("5fb7f43bcf65c468175af431", console.log))
  .catch(console.error)
  .then(() => mongoose.disconnect())
  .then(() => console.log("ended"));
