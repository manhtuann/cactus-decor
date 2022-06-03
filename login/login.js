const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function signUp(e) {
  e.preventDefault();
  let username = document.getElementById('username2').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password2').value;
  let user = {
    username: username,
    email: email,
    password: password,
  }
  let json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Sign up success")
}

const signUpForm = document.querySelector('.sign-up-form');

signUpForm.addEventListener('submit',signUp);

function signIn(e) {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let user = localStorage.getItem(username);
  let data = JSON.parse(user);
  if (user == null) {
    alert("Please type again")
  }
  else if(username == data.username && password == data.password){
    alert("Login success")
    window.location.href = "../home/home.html"
  }
  else {
    alert("Login fail")
  }
}

const signInForm = document.querySelector('.sign-in-form');

signInForm.addEventListener('submit',signIn);