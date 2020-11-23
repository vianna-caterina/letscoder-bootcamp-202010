const {
  validateEmail,
  validatePassword,
  validateCallback,
  validateFullname,
} = require("./helpers/validations");
const semaphore = require("./helpers/semaphore");
const context = require("./context");

const {
  env: { DB_NAME },
} = process;

module.exports = function (fullname, email, password, callback) {
  validateFullname(fullname);
  validateEmail(email);
  validatePassword(password);
  validateCallback(callback);

  const { connection } = this;
  // this es context con el bind
  //es lo mismo que const { connection } = context

  const db = connection.db(DB_NAME);
  //crea una constante que es la base de datos

  const users = db.collection("users");
  //trae la colleccion de usuarios que esta dentro de la base de datos
  //users.insertOnse -- crea un nuevo usuario

  semaphore((done) => {
    users.findOne({ email }, (error, user) => {
      //dindOne busca parametros del usuario. Va de uno el uno.Busca para metros con los cuales tiene que encotnrar el usuaio.
      if (error) {
        done();

        return callback(error);
      }

      if (user) {
        done();
        // si hay usuario significa que ya existe entonces salta el error
        return callback(new Error(`e-mail ${email} already registered`));
      }

      user = { fullname, email, password };
      //crea un usuario con estas propiedades. No hacemos const user pq viene como parametro.

      //si no hay error y no hay usuario se crea un nuevo usuario con insetOne.
      users.insertOne(user, (error, result) => {
        if (error) {
          done();

          return callback(error);
        }

        done();

        callback(null);
      });
    });
  });
}.bind(context);
