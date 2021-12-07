let buttonServices = document.querySelector("#services");
let main = document.querySelector("tableservice");
buttonServices.onclick = services; 

function services() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const listadeServicos = JSON.parse(this.responseText);
    tableservice.innerHTML  = `
    <div class='tableservice'>
    <img src="./assets/imagens/logo.jpeg" class='imglogo'> 

    <h2 class='titletable'> Tabela de Serviços </h2>
    <br>
    <table class='tablecliente'>
    <tr class='trcliente'>
      <th class='tablecliente'> Serviço </th> 
      <th class='tablecliente'> Valor </th> 
      <th class='tablecliente'> Marcar </th> 
    </tr>
    <tr class='trcliente'> 
    ${listadeServicos.map((servico) => `
    <td class='tdclientefirst'>${servico.tipe} </td> 
    <td class='tdcliente'> R$ ${servico.price},00 </td> 
    <td class='tdcliente'> <button class='third-button'> agendar </button> </td> 
    </tr class='trcliente'>`)}
    </table>  
    <br>
    *Os valores podem estar condicionados a alterações de acordo com as necessidades 
    específicas do cliente. 
    </div>
    `;
  }
  xhttp.open("GET", "https://app-express-barberpoc.herokuapp.com/service", true);
  xhttp.send();
}

