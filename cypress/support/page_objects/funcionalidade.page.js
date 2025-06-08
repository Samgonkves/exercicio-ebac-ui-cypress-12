class comprarProduto {
    visitarUrl () {
        cy.visit('produtos')
    }

    buscarProduto (nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista (nomeProduto) {
        cy.get('.products >.row')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto (novoProduto) {
        //cy.visit(`produtos/${novoProduto}`)
        const urlFormatada = novoProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho (tamanho, cor, quantidade){
        cy.get('.button-variable-item-'+ tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
    }

    realizarLogin (email, senha){
       cy.visit('minha-conta')
       cy.get('#username').clear().type(email)
       cy.get('#password').clear().type(senha)
       cy.get('.woocommerce-form > .button').click()
    }

    cadastrarEndereço (nome, sobren, endereço, cidade, cep, tel, email){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobren)
        cy.get('#select2-billing_country-container').click()
        cy.get('#select2-billing_country-container').type('brasil{enter}')
        cy.get('#billing_address_1').type(endereço)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').click().type('minas{enter}')
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(tel)
        cy.get('#billing_email').type(email)
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
    
    }
    
}

export default new comprarProduto()