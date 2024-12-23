// Função para redirecionar para o instagram
function redirecionarParaPagina1() {
    // Redireciona para outra página
    window.open("https://www.instagram.com/dev_fabioguimaraes/", "_blank");
}

// Função para redirecionar para o linkedin
function redirecionarParaPagina2() {
    // Redireciona para outra página
    window.open("www.linkedin.com/in/fabioguimaraes1", "_blank");
}

// Função para redirecionar para o github
function redirecionarParaPagina3() {
    // Redireciona para outra página
    window.open("https://github.com/FabioHTG/FabioHTG", "_blank"); 
}

// Função para redirecionar para o gmail
function redirecionarParaPagina4() {
  // Redireciona para outra página
  window.open("mailto:fabio8henrique@gmail.com", "_blank");
}



// Função para o pop-up
function showPopup(popupNumber) {
  document.getElementById('popup' + popupNumber).style.display = 'block';
}

function closePopup(popupNumber) {
  document.getElementById('popup' + popupNumber).style.display = 'none';
}

// Fechar o pop-up ao clicar fora dele
window.onclick = function(event) {
  for (let i = 1; i <= 5; i++) {
    let popup = document.getElementById('popup' + i);
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  }
}

// Função para rolar suavemente até o topo da página
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  var voltarButton = document.querySelector('.voltar');
  var footer = document.querySelector('footer');
  var footerRect = footer.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // Verifica se o rodapé está visível na tela
  if (footerRect.top < windowHeight) {
      voltarButton.classList.add('visible');
  } else {
      voltarButton.classList.remove('visible');
  }
});
