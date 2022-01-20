// ATIVAR LINKS DO MENU
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href; // acessa a url atual
    const href = link.href

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);


// ATIVAR ITENS DO ORÇAMENTO
const parametros = new URLSearchParams(location.search);

function ativarProduto(param) {
    const elemento = document.getElementById(param);

    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);