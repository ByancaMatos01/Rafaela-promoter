// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões "Adicionar ao carrinho"
    const addButtons = document.querySelectorAll('.add-carrinho');

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra o item pai mais próximo para obter os detalhes do item
            const item = this.closest('.item');
            
            // Coleta informações específicas do item
            const titulo = item.querySelector('.topic').textContent;

            // Cria uma nova linha na tabela de carrinho
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${titulo}</td>
                <td>1</td> <!-- Por padrão, adicionamos quantidade 1 -->
            `;
            
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




// Seleciona todos os botões "Ver itens"
const verItensButtons = document.querySelectorAll('.verItens');

verItensButtons.forEach(button => {
    button.addEventListener('click', function() {
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
