/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { name } from 'faker/lib/locales/az';
import Name from 'faker/lib/name';

describe('Completar endereço de envio', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Completar endereço de envio', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobren = faker.person.lastName()
        var endereço = faker.location.streetAddress()
        var cidade = faker.location.city ()
        cy.primeiroCadastro(email,'teste@senha', nome, sobren)
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobren)
        cy.get('#select2-shipping_country-container').click()
        cy.get('#select2-shipping_country-container').type('brasil{enter}')
        cy.get('#shipping_address_1').type(endereço)
        cy.get('#shipping_city').type(cidade)
        cy.get('#select2-shipping_state-container').click().type('minas{enter}')
        cy.get('#shipping_postcode').type('34001-344')
        cy.get('.button').click()
        cy.get('.woocommerce-message').should('exist')
    
});

})