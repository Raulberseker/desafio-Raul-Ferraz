class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
        };

        const formasPagamento = ['dinheiro', 'debito', 'credito'];

        if (!formasPagamento.includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        let valorTotal = 0;

        for (const item of itens) {
            if (!cardapio.hasOwnProperty(item)) {
                return 'Item inválido!';
            }
            valorTotal += cardapio[item];
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95; // Desconto de 5% para pagamento em dinheiro
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03; // Acréscimo de 3% para pagamento no crédito
        }

        return valorTotal.toFixed(2);
    }
}

export { CaixaDaLanchonete };
