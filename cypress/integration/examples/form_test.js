describe('Inputs and cancel button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })

    it('Navigate to pizza', () => {
        cy.get('button#orderPizza').click()
    })

    it('can input instructions', () => {
        cy.get('input[name=instructions]')
            .type('Make pizza')
            .should('have.value', 'Make pizza')
    })

    it('can select multiple toppings', () => {
        cy.get('input[name=pineapple]')
            .click()
            .should('have.value', 'on')
        cy.get('input[name=ham]')
            .click()
            .should('have.value', 'on')
    })

    it('can submit', () => {
        cy.get('select[name=size]')
            .select('medium')
            .should('have.value', 'medium')
        cy.get('[name=sauce]')
            .first().check()
        cy.get('button#submitBtn').should('not.be.disabled')
    })
        
})