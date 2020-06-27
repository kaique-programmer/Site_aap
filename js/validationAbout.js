function validationForm() {
  var name, surName, cep, inputEndereco, inputCidade, inputNumero;

  name = document.getElementById('inputNome').value;
  surName = document.getElementById('inputSobrenome').value;
  cep = document.getElementById('inputCep').value;
  inputEndereco = document.getElementById('inputEndereco').value;
  inputCidade = document.getElementById('inputCidade').value;
  inputNumero = document.getElementById('inputNumero').value;

  if (name.length < 1) {
    alert("Campo nome em Branco");
  } else if (surName.length < 1) {
    alert("Campo sobrenome em branco");
  }
  else if (cep.length < 1) {
    alert("Campo cep em branco");
  }
  else if (inputEndereco.length < 1) {
    alert("Campo endereço em branco");
  }
  else if (inputCidade.length < 1) {
    alert("Campo cidade em branco");
  }
  else if (inputNumero.length < 1) {
    alert("Campo número em branco");
  }
}