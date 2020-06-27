var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", () => {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", () => {
  body.className = "sign-up-js";
})

function validationRegistration() {
  var user, numberRegistration, emailUser, pass, passConfirm;

  user = document.getElementById('txtUser').value;
  numberRegistration = document.getElementById('txtNumberRegistration').value;
  emailUser = document.getElementById('txtEmail').value;
  pass = document.getElementById('txtPassword').value;
  passConfirm = document.getElementById('txtPasswordConfirm').value;

  if (user.length < 1) {
    alert("Campo Usuário em Branco");
  } else if (numberRegistration.length < 1) {
    alert("Campo número de matrícula em branco");
  }
  else if (emailUser.length < 1) {
    alert("Campo email em branco");
  }
  else if (pass.length < 1) {
    alert("Campo senha em branco");
  }
  else if (passConfirm.length < 1) {
    alert("Campo confirmar senha em branco"); 
  }
}

function validationLogin() {
  var userOrNumberRegistration, pass;

  userOrNumberRegistration = document.getElementById('txtNumberRegistrationLogin').value;
  pass = document.getElementById('txtPasswordLogin').value;

  if (userOrNumberRegistration.length < 1) {
    alert("Campo Usuário/Número da matrícula em Branco");
  } else if (pass.length < 1) {
    alert("Campo senha em branco");
  }

  /*if (userOrNumberRegistration.value == 'admin@admin' && pass.value == 'admin') {
    alert("Login Autorizado");
    //window.location = "http://google.com";  
  } else {
    alert('Usuário/Número da matrícula ou senha inválida.\n Digite novamente');
    userOrNumberRegistration.value = "";
    pass.value = "";
  }*/
}