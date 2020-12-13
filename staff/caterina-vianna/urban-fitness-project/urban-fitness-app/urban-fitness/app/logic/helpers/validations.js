module.exports = {
  validateEmail(email) {
    if (typeof email !== "string")
      throw new TypeError(`${email} is not an e-mail`);

    if (!email.trim().length)
      throw new ContentError("e-mail is empty or blank");

    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    )
      throw new FormatError("invalid e-mail");
  },

  validatePassword(password) {
    if (typeof password !== "string")
      throw new TypeError(password + " is not a password");

    if (!password.trim().length)
      throw new ContentError("password is empty or blank");
  },

  validateCallback(callback) {
    if (typeof callback !== "function")
      throw new TypeError(callback + " is not a callback");
  },

  validateFullname(fullname) {
    if (typeof fullname !== "string")
      throw new TypeError(fullname + " is not a fullname");

    if (!fullname.trim().length)
      throw new ContentError("fullname is empty or blank");
  },
  validateFirstName(firstName) {
    if (typeof firstName !== "string")
      throw new TypeError(firstName + " is not a first name");

    if (!firstName.trim().length)
      throw new ContentError("first name is empty or blank");
  },
  validateLastName(lastName) {
    if (typeof lastName !== "string")
      throw new TypeError(lastName + " is not a last name");

    if (!lastName.trim().length)
      throw new ContentError("last name is empty or blank");
  },

  validateId(id) {
    if (typeof id !== "string") throw new TypeError(id + " is not an id");

    if (!id.trim().length) throw new ContentError("id is empty or blank");

    if (id.length !== 24)
      throw new LengthError(`id length ${id.length} is not 24`);
  },

  validateToken(token) {
    if (typeof token !== "string")
      throw new TypeError(token + " is not a token");

    if (!token.trim().length) throw new Error("token is empty or blank");
  },

  validateText(text) {
    if (typeof text !== "string") throw new TypeError(text + " is not a text");

    if (!text.trim().length) throw new ContentError("text is empty or blank");
  },

  validateTags(tags) {
    if (!(tags instanceof Array))
      throw new TypeError(`${tags} is not an array`);

    tags.forEach((tag) => {
      if (typeof tag !== "string") throw new TypeError(tag + " is not a tag");

      if (!tag.trim().length) throw new ContentError("tag is empty or blank");
    });
  },

  validateVisibility(visibility) {
    if (typeof visibility !== "string")
      throw new TypeError(visibility + " is not a visibility");

    if (!visibility.trim().length)
      throw new ContentError("visibility is empty or blank");

    if (visibility !== "public" && visibility !== "private")
      throw new ValueError("visibility is not public or private");
  },

  validateQuery(query) {
    if (typeof query !== "string")
      throw new TypeError(query + " is not a query");

    if (!query.trim().length) throw new ContentError("query is empty or blank");
  },

  validateFile(file) {
    if (!(file instanceof File)) throw new TypeError(`${file} is not file`);
  },
};
