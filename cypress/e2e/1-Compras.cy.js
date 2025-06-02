/// <reference types = 'cypress'/>

import comprarProduto from "../support/page_objects/funcionalidade.page";

describe('Funcionalidades:Produtos', () => {
    beforeEach(() => {
        comprarProduto.visitarUrl()
    });

    afterEach(() => {
        cy.viewport(1280, 720)
        cy.screenshot()
    });

    it('Escolhendo o primeiro produto', () => {
        cy.get('.product-block').eq(7).click()
        cy.get('.button-variable-item').eq(2).click()
        cy.get('.button-variable-item').eq(5).click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('exist')
    });

    it('Comprar produtos da massa de produtos', () => {
        cy.fixture('produtos').then(dados =>{
            comprarProduto.buscarProduto(dados[1].nomeProduto)
            comprarProduto.addProdutoCarrinho(
                dados[1].cor, 
                dados[1].tamanho,
                dados[1].qtd)
                cy.get('.woocommerce-message').should('exist')
        })
    });

     it('Comprar produtos da massa de produtos', () => {
        cy.fixture('produtos').then(dados =>{
            comprarProduto.buscarProduto(dados[0].nomeProduto)
            comprarProduto.addProdutoCarrinho(
                dados[0].cor, 
                dados[1].tamanho,
                dados[2].qtd)
                cy.get('.woocommerce-message').should('exist')
        })
    });

    it('Selecionar o ultimo produto', () => {
        let calça = 'Cronus Yoga Pant'
        comprarProduto.buscarProduto(calça)
        comprarProduto.addProdutoCarrinho('36', 'Black', '10')
        cy.get('.woocommerce-message').should('contain', calça)
        
    });

});