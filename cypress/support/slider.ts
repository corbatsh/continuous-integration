declare namespace Cypress {
	interface Chainable {
		pickValueOnSlider(value: string): Chainable<Element>
	}
}

Cypress.Commands.add('pickValueOnSlider', pick => {
	cy.contains(pick).click()
})
