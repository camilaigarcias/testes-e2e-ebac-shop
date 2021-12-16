/// <reference types="cypress" />
import EnderecoCompra from '../support/page_objects/nome-funcionliada.page'
var  faker  =  require  ( 'faker' ) ;


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
   
    beforeEach(() => {
        cy.visit('produtos/')
        cy.get(':nth-child(4) > .page-numbers').click()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let emailFaker = faker.internet.email()

        cy.addProdutos('Erica Evercool Sports Bra', 'S', 'Orange', 4)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        EnderecoCompra.editarEnderecoCompra('Camila', 'Garcia', 'Ebac', 'Brasil', 'Avenida do Contorno', '1555', 'Belo Horizonte', 'Minas Gerais', '30110001','319855555', emailFaker, 'senhaforte@#')
        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')
        


    });


})