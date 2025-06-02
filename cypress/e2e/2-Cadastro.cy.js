/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Realizar cadastro para finalizra a compra', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Cadastrar email e senha', () => {
        cy.get('#reg_email').clear().type(smg@gmail.com)
        cy.get('#reg_password').type('senha@456')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });

    it('Cadastrar dados da conta', () => {
        var nome = faker.person.firstName()
        var email = smg@gmail.com
        var sobren = faker.person.lastName()

        cy.get('#reg_email').clear().type(email)
        cy.get('#reg_password').type('senha@456')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').clear().type(nome)
        cy.get('#account_last_name').clear().type(sobren)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'modificados com sucesso')
    });

    it('Completar cadastro com Comando personalizado', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobren = faker.person.lastName()
        cy.primeiroCadastro(email,'teste@senha', nome, sobren)
        cy.get('.woocommerce-message').should('contain','modificados com sucesso')
     });
    
});