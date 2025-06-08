/// <reference types="cypress" />
import comprarProduto from "../support/page_objects/funcionalidade.page";
import { faker } from '@faker-js/faker';

describe('Teste end2end : Compra de 4 produtos, cadastro, checkout e validando a compra no final', () => {
    
    afterEach(() => {
        cy.viewport(1280, 720)
        cy.screenshot()
    });

    it('Login', () => {
        cy.visit('minha-conta')
        cy.get('#username').clear().type('smgs@teste.com')
        cy.get('#password').clear().type('456teSte')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'smgs')
        
    });

    it('Compra de 4 produtos, cadastro e finalização', () => {
        comprarProduto.visitarUrl()
        cy.fixture('produtos').then(dados =>{
                    comprarProduto.buscarProduto(dados[1].nomeProduto)
                    comprarProduto.addProdutoCarrinho(
                        dados[1].cor, 
                        dados[1].tamanho,
                        dados[1].qtd)
                        cy.get('.woocommerce-message').should('exist')
        })
        let calça = 'Cronus Yoga Pant'
                comprarProduto.buscarProduto(calça)
                comprarProduto.addProdutoCarrinho('36', 'Black', '1')
                cy.get('.woocommerce-message').should('contain', calça)

        let blusa = "Daphne Full-Zip Hoodie"
                comprarProduto.buscarProduto(blusa)
                comprarProduto.addProdutoCarrinho('M', 'Purple', '1')
                cy.get('.woocommerce-message').should('contain', blusa)

        let jacketa = "Augusta Pullover Jacket"
                comprarProduto.buscarProduto(jacketa)
                comprarProduto.addProdutoCarrinho('M', 'Blue', '1')
                cy.get('.woocommerce-message').should('contain', jacketa)

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        var nome = faker.person.firstName()
        var sobren = faker.person.lastName()
        var endereço = faker.location.streetAddress()
        var cidade = faker.location.city ()
        comprarProduto.cadastrarEndereço (nome, sobren, endereço, cidade, '34001-434', '31 99823-1868', 'smgs@teste.com')
        cy.get('.woocommerce-order-overview').should('exist').click()
    })

    it('Vizualização do pedido no site', () => {
        comprarProduto.realizarLogin ('smgs@teste.com', '456teSte')
        cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click()
        cy.get('.woocommerce-message').should('contain', 'Pedido realizado com sucesso')

    });

})

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
        //Como cliente 
        //Para fazer um pedido de 4 produtos 
        //Fazendo a escolha dos produtos
        //Adicionando ao carrinho
        //Preenchendo todas opções no checkout
        //E validando minha compra ao final */
})

