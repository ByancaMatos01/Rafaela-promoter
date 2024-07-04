var valorTotal = [0, 0, 0, 0, 0, 0, 0]; // Corrigido para incluir todos os produtos
var valorProduto = [0, 500, 5, 3000, 120, 250, 30]; // Incluídos os novos produtos
var qtd = [0, 0, 0, 0, 0, 0, 0]; // Corrigido para incluir todos os produtos


// Trocar o nome pelo inserido no login
function trocarNome() {
    var nome = document.getElementById('nome');
    var usuario = document.getElementById('usuario').value;
    nome.innerHTML = usuario;
}

// Aumentar a quantidade de itens de um produto
function adicionarItem(item) {
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);
    qtd[item] += 1;
    valorTotal[item] = valorProduto[item] * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
}

// Diminuir a quantidade de itens de um produto
function removerItem(item) {
    if (qtd[item] > 0) {
        qtd[item] -= 1;
        var quantidade = document.getElementById('quantidade' + item);
        var total = document.getElementById('total' + item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = valorProduto[item] * qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }
}

// Remover o produto
function removerProduto(produto) {
    var pai = document.getElementById('carrinho');
    var filho = document.getElementById('produto' + produto);
    if (confirm('Confirmar exclusão?')) {
        valorTotal[produto] = 0; // Zera o valor total do produto ao remover
        qtd[produto] = 0;
        pai.removeChild(filho);
        valorCompra();
    }
}

// Calcular o valor total da compra
function valorCompra() {
    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0;
    for (var i = 1; i < valorTotal.length; i++) { // Começa do índice 1
        valor += valorTotal[i];
    }
    // valorTotalCompra.innerHTML = valor.toFixed(2);
}

// Finalizar a compra e zerar os valores
function voltaEstado() {
    document.location.reload(true);
}

document.addEventListener('DOMContentLoaded', function() {
   
    const confirmar = document.querySelectorAll('.btn-confirmar');

    if (confirmar.length > 0) {
        confirmar.forEach(function(element) {
            element.addEventListener('click', finalizarCompra);
        });} else {
        console.error('Botão .btn-confirmar não encontrado.');
    }

    const voltar = document.querySelectorAll('.btn-voltar');

    if (voltar.length > 0) {
        voltar.forEach(function(element) {
            element.addEventListener('click', voltaEstado);
        });
    } else {
        console.error('Botão .btn-confirmar não encontrado.');
    }
});

function finalizarCompra() {
    alert('Obrigada pela compra !');
}

