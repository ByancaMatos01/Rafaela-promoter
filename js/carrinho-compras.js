let total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){

    let produto = document.getElementById('produto').value ;
    let nome = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    let listaProduto = document.getElementById('lista-produtos');
    listaProduto.innerHTML = listaProduto.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$ ${preco}</span>
  </section>`;

  total = total + preco;

  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${total}`;

  document.getElementById('quantidade').value = 0;

}

function limpar(){

    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}