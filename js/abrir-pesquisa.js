const pesquisar = document.querySelector('.nav-menu-search');

function abrirPesquisa (){
    const conteudoPesquisa = document.querySelector('.open-search');
    conteudoPesquisa.classList.toggle('ativo');
}

pesquisar.addEventListener('click', abrirPesquisa);