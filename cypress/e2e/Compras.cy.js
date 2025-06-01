/// <reference types="cypress" />

describe('Escolher e comprar 4 itens do EBAC Shop', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    afterEach(() => {
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

    it('', () => {
        
    });
});