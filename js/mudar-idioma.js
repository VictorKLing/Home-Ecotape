const botaoAbrirIdioma = document.querySelector('.select-language');
const botaoFecharIdioma = document.querySelector('.botao-fechar-idioma');
const overlayLanguage = document.querySelector('.overlay-open-select-language');


function mostrarIdioma(){
    const conteudoIdioma = document.querySelector('.language-responsivo');
    conteudoIdioma.classList.toggle('ativo');
    overlayLanguage.classList.toggle('ativar')

}
function fecharIdioma(){
    const conteudoIdioma = document.querySelector('.language-responsivo')
    conteudoIdioma.classList.remove('ativo');
    overlayLanguage.classList.toggle('ativar')

}

botaoAbrirIdioma.addEventListener('click', mostrarIdioma)
botaoFecharIdioma.addEventListener('click', fecharIdioma)
overlayLanguage.addEventListener('click')