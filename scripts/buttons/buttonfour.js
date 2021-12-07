let buttonAgendar = document.querySelector("#agendamento");
console.log( document.querySelector("#agendamento"))
buttonAgendar.onclick = submeteragenda;

function submeteragenda() {
    const nomesocial = document.querySelector('#nomesocialagenda').value;
    const servico = document.querySelector('#selectservice').value;
    const datamarcada= document.querySelector('#datamarcada').value;
    const horariomarcado = document.querySelector('#horariomarcado').value;

    const params = {
    nomesocial: nomesocial,
    servico: servico, 
    data: datamarcada, 
    horario: horariomarcado,
  }

  let date = new Date(datamarcada);
  let dia = date.getDate();
  let dataMonth = date.getMonth();
  let ano4 = date.getFullYear();
  let dateforFront =  dia + '/' + (dataMonth + 1) + '/' + ano4;



  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'http://app-express-barberpoc.herokuapp.com/agenda', true);
  xhttp.setRequestHeader('Content-Type', 'application/json');

  xhttp.onload = function() { 
    swal({ 
    icon: 'success',
    title: 'Horário agendada com Sucesso!',  
    text: `Você agendou seu horário para o dia ${dateforFront} as ${horariomarcado},
    qualquer alteração necessária entre em contato via telefone (51)9999.9999`,
    width: 600,
    padding: '3em',
   });
}

  xhttp.send(JSON.stringify(params));
   
}

