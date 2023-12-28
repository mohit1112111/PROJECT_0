app.controller("registerCtrl", [
  "$scope",
  "registerService",
  "$window",
  function (sc, registerService, $window) {
    // Check user logged in or not.
    var checkAuth = $window.localStorage.getItem("user");
    if (checkAuth) {
      // Redirect: To movies page. If the user already logged-in.
      registerService.goTomovies();
    }

    // Name field
    sc.fullName = "";

    // Email field
    sc.email = "";

    // Password field
    sc.password = "";

    // Confrim Password field
    sc.cPassword = "";

    // Register form Submit
    sc.handleFormSubmit = () => {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~]).{6,}$/;
      //       Explanation of the regular expression:

      // ^: Asserts the start of the string.
      // (?=.*\d): Requires at least one digit.
      // (?=.* [a - z]): Requires at least one lowercase letter.
      // (?=.* [A - Z]): Requires at least one uppercase letter.
      // (?=.* [!@#$ %^&* ()_ += {}\[\]:;<>,.?/~]): Requires at least one special character.
      //   .{6,}: Matches any character (except for line terminators) at least 6 times.
      //   $: Asserts the end of the string.

      // check name validation.
      if (sc.fullName.trim() === "") {
        alert("Name can't be empty.");
        return;
      }

      // check email validation.
      if (!validRegex.test(sc.email)) {
        alert("Enter valid email.");
        return;
      }


      // check password
      if (!passRegex.test(sc.password)) {
        alert("Password should contain special char,upperChar,lowerChar and numbers.")
        return;
      }else if (sc.password.includes(" ")) {
        alert("Password shouldn't contain any space.");
        return;
      }

      // confirm password check validation.
      if (!passRegex.test(sc.password)) {
        alert("Password should contain special char,upperChar,lowerChar and numbers.");
        return;
      } else if (sc.cPassword.includes(" ")) {
        alert("Confirm Password shouldn't contain any space.");
        return;
      } else if (sc.password !== sc.cPassword) {
        alert("Password and confrim password didn't matched.");
        return;
      }

      // check if the user already exist or not.
      registerService.getUsers(function (data) {
        sc.user = data.filter((data) => {
          return data.email === sc.email;
        });

        if (sc.user.length === 0) {
          registerService.addUser({
            fullName: sc.fullName,
            email: sc.email,
            password: sc.password,
            cPassword: sc.password,
          });
          alert("You are registered Successfully.");
          registerService.goToLogin();
        } else {
          alert("User already exist.");
          return;
        }
      });
    };
  },
]);
