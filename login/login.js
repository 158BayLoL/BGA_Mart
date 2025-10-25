function Login() {
  event.preventDefault();
  let acc = JSON.parse(localStorage.getItem("users")) || [];
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let users;

  for (let i in acc) {
    if (acc[i].email === email && acc[i].password === pass) {
      users = acc[i];
    }
  }

  if (users) {
    localStorage.setItem("LoggedInUser", email);
    window.location = "../index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!!!");
    return;
  }
  // CheckIfLoggedIn();
}

function CheckIfLoggedIn() {
  let loggedInUser = localStorage.getItem("LoggedInUser");
  if (loggedInUser) {
    window.location = "../Account/acc.html";
  }
}

CheckIfLoggedIn();
