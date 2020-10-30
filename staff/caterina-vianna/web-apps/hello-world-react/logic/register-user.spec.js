// TODO
const { random } = Math;

describe("SPEC registerUser()", function () {
  describe("create new user", function () {
    let fullname, email, password, repassword;

    beforeEach(function (done) {
      fullname = `fullname-${random()}`;
      email = `email-${random()}@mail.com`;
      password = `password-${random()}`;
      repassword = password;

      call(
        "POST",
        "https://b00tc4mp.herokuapp.com/api/v2/users/auth",
        { "Content-type": "application/jason" },
        JSON.stringify({ username: email, password }),
        function (status, response) {
          expect(status).toBe(200);
          expect(response.length).toBe(0);

          token = JSON.parse(response).token;

          expect(token.length).toBeGreatherThan(0);

          done();
        }
      );
    });
    it("should succeed on right token", function (done) {
      retrieveUser(token, function (error, user) {
        expect(error).toBeNull();
        expect(user).toBeInstanceOf(Object);
        expect(user.fullname).toBe(fullname);
        expect(user.username).toBe(email);

        expect(true).toBeTrue();

        done();
      });
    });
    afterEach(function () {
      call(
        "DELETE",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        JSON.stringify({ password }),
        function (status, response) {
          expect(status).toBe(204);
          expect(response.length).toBe(0);
        }
      );
    });
  });
});
