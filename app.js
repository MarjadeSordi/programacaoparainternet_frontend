let body = document.querySelector("body");
let main = document.querySelector("tablerender");

body.onload = () => {
  buscarClientes();
}

function buscarClientes() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const listadeClientes = JSON.parse(this.responseText);
    tablerender.innerHTML = `
    <table class='tablecliente'>
    <tr class='trcliente'>
      <th class='tablecliente'> Nome </th> 
      <th class='tablecliente'> Nome Social </th> 
      <th class='tablecliente'> Genero  </th> 
      <th class='tablecliente'> Idade </th> 
      <th class='tablecliente'> Telefone  </th> 
      <th class='tablecliente'>  E-mail </th> 
    </tr>
    <tr class='trcliente'> 
    ${listadeClientes.map((cliente) => `
    <td class='tdcliente'>${cliente.nome} </td> 
    <td class='tdcliente'>${cliente.nomesocial} </td> 
    <td class='tdcliente'>${cliente.genero} </td> 
    <td class='tdcliente'>${cliente.idade} </td> 
    <td class='tdcliente'>${cliente.telefone} </td>
    <td class='tdcliente'>${cliente.email} </td> 
    </tr class='trcliente'>`)}
    </table> 
    `;
  }
  xhttp.open("GET", "https://app-express-barberpoc.herokuapp.com/clients", true);
  xhttp.send();
}
