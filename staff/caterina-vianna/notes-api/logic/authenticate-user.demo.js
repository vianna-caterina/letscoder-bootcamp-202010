require("dotenv").config();
const authenticateUser = require("./authenticate-user");
const { ConflictError } = require("../errors");
const mongoose = require("mongoose");

mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    authenticateUser("manuelbarzi@gmail.com", "123123123", console.log)
  )
  .catch(console.error)
  .then(() => mongoose.disconnect())
  .then(() => console.log("ended"));

//authenticateUser('pepigri@mail.com', '123123123', console.log)
