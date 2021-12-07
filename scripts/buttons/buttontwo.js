let buttonSubmit = document.querySelector("#cadastrobutton");
buttonSubmit.onclick = submeterform;

function submeterform() {
    const nome = document.querySelector('#nomecompleto').value;
    const nomesocial = document.querySelector('#nomesocial').value;
    const genero= document.querySelector('#genero').value;
    const idade= document.querySelector('#idade').value;
    const telefone= document.querySelector('#telefone').value;
    const email=   document.querySelector('#email').value;
    const senha= document.querySelector('#senha').value;

    const params = {
    nome: nome,
    nomesocial: nomesocial,
    genero: genero,
    idade: idade,
    telefone: telefone,
    email:   email,
    senha: senha,
  }

  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'http://app-express-barberpoc.herokuapp.com/clients', true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.onload = function() { 
    swal({ 
    icon: 'success',
    title: 'Cadastrado com sucesso!',  
    width: 600,
    padding: '3em',
   });}

  xhttp.send(JSON.stringify(params));
   
}



