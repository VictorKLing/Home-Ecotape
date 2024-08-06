const botaoAbrir = document.querySelector('.botao');
const botaoFechar = document.querySelector('.botao-fechar');
const overlay = document.querySelector('.overlay');

function mostrar() {
  const texto = document.querySelector('.menu-lateral-header');
  texto.classList.toggle('ativo');
}

function fechar() {
  const texto = document.querySelector('.menu-lateral-header');
  texto.classList.remove('ativo');
}

botaoAbrir.addEventListener('click', mostrar);
botaoFechar.addEventListener('click', fechar);
overlay.addEventListener('click', toggleMenu);
