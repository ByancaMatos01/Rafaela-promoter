// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões "Adicionar ao carrinho"
    const addButtons = document.querySelectorAll('.add-carrinho');

    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Encontra o item pai mais próximo para obter os detalhes do item
            const item = this.closest('.item');

            // Coleta informações específicas do item
            const titulo = item.querySelector('.topic').textContent;

            // Cria uma nova linha na tabela de carrinho
            const newRow = document.createElement('tr');
            newRow.setAttribute('data-id', '1'); // Define o atributo data-id com o valor '1'
            newRow.innerHTML = `
                    <td>${titulo}</td>
                    <td>1</td> <!-- Por padrão, adicionamos quantidade 1 -->
                    <td>
                        <button class="btn-excluir">Excluir</button>
                    </td>
                `;

            // Adiciona a nova linha à tabela de carrinho
            const tabelaCarrinho = document.querySelector('#carrinho'); // Supondo que você tenha um ID na sua tabela
            if (tabelaCarrinho) {
                tabelaCarrinho.appendChild(newRow);
            } else {
                console.error('Elemento com ID "carrinho" não encontrado.');
            }

            // Seleciona a tabela de carrinho
            const carrinho = document.querySelector('#carrinho tbody');

            // Verifica se a tabela de carrinho foi encontrada corretamente
            if (carrinho) {
                // Adiciona a nova linha à tabela de carrinho
                carrinho.appendChild(newRow);
            } else {
                console.error('Elemento carrinho não encontrado no DOM.');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Script para exclusão de itens do carrinho
    const carrinho = document.querySelector('#carrinho tbody');

    carrinho.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-excluir')) {
            const tr = event.target.closest('tr'); // Encontra o elemento <tr> mais próximo
            if (tr) {
                tr.remove(); // Remove o elemento <tr> do DOM
            } else {
                console.error('Elemento <tr> não encontrado para exclusão.');
            }
        }
    });
});




// Seleciona todos os botões "Ver itens"
const verItensButtons = document.querySelectorAll('.verItens');

verItensButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Encontra o item pai mais próximo para obter a seção de detalhes
        const item = this.closest('.item');

        // Mostra a seção de detalhes específica para este item
        const detailSection = item.querySelector('.detail');
        detailSection.style.display = 'block';

        // Oculta os outros detalhes dos itens
        const allDetails = document.querySelectorAll('.detail');
        allDetails.forEach(detail => {
            if (detail !== detailSection) {
                detail.style.display = 'none';
            }
        });
    });
});
