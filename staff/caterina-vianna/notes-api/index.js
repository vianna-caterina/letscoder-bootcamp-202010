require("dotenv").config();

const express = require("express");
const logger = require("./utils/logger");
const { MongoClient } = require("mongodb");
//mongo e sun modulo
const { cors } = require("./middlewares");
const { context } = require("./logic");
//context es un objeto vacio
const {
  env: { PORT, MONGODB_URL },
  argv: [, , port = PORT || 8080],
} = process;
//env: sacamos la url de mongo y servidor

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true });
//con el mongo client creamos un nuevo cliente y que coja el url mongodb_url.
logger.log("starting server", "info");

//setea el cliente
client.connect((error, connection) => {
  if (error)
    return logger.log(error, "error", (error) => {
      if (error) console.error(error);

      shutDown();
    });
  // si hay error apagamos el cliente

  context.connection = connection;
  //se crea una nueva propiedad connection (archivo conecion.js)
  // se guarda en context para poder usarlo en otros lados.

  const app = express();

  app.use(cors);

  const { api } = require("./routes");

  app.use(api);

  app.get("/*", (req, res) => res.status(404).send("Not found :("));

  app.listen(port, () => logger.log(`server running on port ${port}`));
});

//cuando
const shutDown = () =>
  logger.log(`stopping server`, "info", (error) => {
    if (error) console.error(error);

    if (client)
      return client.close((error) => {
        if (error) console.error(error);

        process.exit(0);
      });

    process.exit(0);
  });

process.on("SIGINT", shutDown);
// cuando le damos a control c se activa signint que activa shutdown.
