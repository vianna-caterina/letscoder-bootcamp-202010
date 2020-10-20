var users = [];

//options
(function () {
  var register = document.querySellector("button");
  register.onclick = function () {
    var options = document.querySelector("section");
    options.classList.add("off");

    var register2 = document.querySelectorAll("section")[1];
    register2.classList.remove("off");
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
    console.log(fullname, email, password, repassword);
    if (!fullname.trim().length) throw new Error("full name is empty");
    if (!email.trim().length) throw new Error("e-mail is empty");
    if (!password.trim().length) throw new Error("password is empty");
    if (!repassword.trim().length) throw new Error("repassword is empty");
    //if (![a-zA-Z0-9._]+[@]+[a-zA-Z0-9]+[.]+[a-zA-Z]{2,6}) throw new Error ("not an email");

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

//register confirm

()
