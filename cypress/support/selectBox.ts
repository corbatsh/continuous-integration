const selectBox = '#preferred-interface'

declare namespace Cypress {
	interface Chainable {
		selectAnOption(option: string): Chainable<Element>
		testChosenOption(option: string): Chainable<Element>
	}
}

Cypress.Commands.add('selectAnOption', option => {
	cy.get(selectBox).select(option)
})

Cypress.Commands.add('testChosenOption', option => {
	cy.get(selectBox).should('have.value', option)
})
