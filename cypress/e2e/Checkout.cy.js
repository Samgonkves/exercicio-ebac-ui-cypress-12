/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Realizar cadastro para finalizra a compra', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Cadastrar email e senha', () => {
        cy.get('#reg_email').clear().type(faker.internet.email())
        cy.get('#reg_password').type('senha@456')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });
    
    
});