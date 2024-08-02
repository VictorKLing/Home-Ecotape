//ativar links to menuconst links = document.querySelectorAll('.nav-menu a')
const links = document.querySelectorAll('.nav-menu a')

function ativarLink (link){
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
        link.classList.add("ativo")
    }
}


links.forEach(ativarLink); 
