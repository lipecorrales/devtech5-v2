const linksContraste = document.querySelectorAll('nav a[data-contraste]');

linksContraste.forEach(linksContraste => linksContraste.addEventListener('click', function() {
    var dataContraste = this.dataset.contraste; 
    contraste(dataContraste); 
  }
));

const contraste = (dataContraste) => {
  let setId;

  if (dataContraste == 1) {
    setId = 'contrasteBranco';
  } else if (dataContraste == 2) {
    setId = 'contrastePreto';
  } else if (dataContraste == 3) {
    setId = 'contrasteAzul';
  } else {
    setId = ''
  }
  // setando o ID do contraste escolhido no body
  document.querySelector("body").setAttribute("id", setId);
  // Guardando o cookie do contraste
  document.cookie = "contraste=" + setId + "";
}

// Verificação do cookie
const cookieContrasteBranco = document.cookie.indexOf('contrasteBranco');
const cookieContrastePreto = document.cookie.indexOf('contrastePreto');
const cookieContrasteAzul = document.cookie.indexOf('contrasteAzul');

//Verificando o cookie setado anteriormente
let cookieTrue = '';
if (cookieContrasteBranco != -1) {
  cookieTrue = 1;
} else if (cookieContrastePreto != -1) {
  cookieTrue = 2;
} else if (cookieContrasteAzul != -1) {
  cookieTrue = 3;
} else {
  cookieTrue = '';
}

contraste(cookieTrue);

const Enviar = () => {

    const nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}