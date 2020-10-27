(function () {
  console.log("TEST retrieveUser()");

  (function () {
    var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password

       registerUser(fullname, email, password, repassword, function (error) {
            console.log(' should succeed on new user')

            console.assert(error === null, 'should error be null')

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', { 'Content-type': 'application/json' },
                '{ "username": "' + email + '", "password" : "' + password + '" }',
                function (status, response) {
                    console.assert(status === 200, 'should status be 200')

                    var res = JSON.parse(response)

                    var token = res.token


                    retrieveUser(token, function (error, user) {
      console.log(" should succeed on call user");

      console.assert(error === null, 'should error be null')

      call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                '{ "username": "' + email + '", "password" : "' + password + '" }',
                function (status, response) {
                    console.assert(status === 200, 'should status be 200')

                    var res = JSON.parse(response)

                    var token = res.token
    });
  });
  
                    call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                        {
                            'Authorization': 'Bearer ' + token,
                            'Content-type': 'application/json'
                        },
                        '{ "password": "' + password + '" }',
                        function (status, response) {
                            console.assert(status === 204, 'should status be 204')
                            console.assert(response.length === 0, 'should response be empty')
                        }
                    )
                }
            )
        })

    
});
