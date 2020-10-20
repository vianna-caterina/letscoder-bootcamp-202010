var users = [];

var validationUser = [];
// options
(function () {
  var register = document.querySelector("button");

  register.onclick = function () {
    var options = document.querySelector("section");

    options.classList.add("off");

    var register = document.querySelectorAll("section")[1];

    register.classList.remove("off");
  };
})();

// register
(function () {
  var register = document.querySelector("form");

  register.onsubmit = function (event) {
    event.preventDefault();

    var inputs = document.querySelectorAll("input");

    var fullname = inputs[0].value;
    var email = inputs[1].value;
    var password = inputs[2].value;
    var repassword = inputs[3].value;

    if (!fullname.trim().length) throw new Error("full name is empty or blank");

    if (!email.trim().length) throw new Error("e-mail is empty or blank");

    if (!password.trim().length) throw new Error("password is empty or blank");

    if (!repassword.trim().length)
      throw new Error("repeat password is empty or blank");

    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    )
      throw new Error("invalid e-mail");

    if (password !== repassword) throw new Error("passwords do not match");

    var user = {
      fullname: fullname,
      email: email,
      password: password,
    };

    users.push(user);

    var sections = document.querySelectorAll("section");

    var register = sections[1];

    register.classList.add("off");

    var confirm = sections[2];

    confirm.classList.remove("off");
  };
})();

// register confirm
(function () {
  var login = document.querySelectorAll("button")[3];

  login.onclick = function () {
    var sections = document.querySelectorAll("section");

    var confirm = sections[2];

    confirm.classList.add("off");

    var login = sections[3];

    login.classList.remove("off");
  };
})();

// TODO login

(function () {
  var buttons = document.querySelectorAll("button");

  var login = buttons[4];

  login.onsubmit = function (event) {
    event.preventDefault();

    var inputsValidation = document.querySelectorAll("input");

    var emailSignUp = inputsValidation[4].value;
    var confirmPass = inputsValidation[5].value;

    var confirmUser = {
      emailSignUp: emailSignUp,
      confirmPass: confirmPass,
    };

    validationUser.push(confirmUser);

    var validate = users.find(function (user) {
      return (
        users.email === confirmUser.emailSignUp && user.password === confirmPass
      );
      if (validate !== undefined) {
        var sections = document.querySelectorAll("section");
        var confirm = sections[3];

        confirm.classList.remove("off");

        var enter = sections[4];

        enter.classList.remove("off");

        var options = document.querySelector("section");

        options.classList.remove("off");

        var register = document.querySelectorAll("section")[1];

        register.classList.remove("off");
      } else {
        alert("intentalo de nuevo");
      }
    });
  };
})();
