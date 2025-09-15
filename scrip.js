let produtos = [];
let index = 0;

fetch('produtos.json')
    .then(res => res.json())
    .then(data => {
        produtos = data;
        mostrarProduto(index);
    });

function mostrarProduto(i) {
    const produto = produtos[i];
    document.getElementById('imagem').innerHTML = produto.image;
    document.getElementById('nome').innerText = produto.name;
    document.getElementById('preco').innerText = produto.price;
}

document.getElementById('v').addEventListener('click', () => {
    index--;
    if(index < 0) index = produtos.length - 1;
    mostrarProduto(index);
});

document.getElementById('p').addEventListener('click', () => {
    index++;
    if(index >= produtos.length) index = 0;
    mostrarProduto(index);
});

console.log
