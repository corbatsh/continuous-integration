declare namespace Cypress {
	interface Chainable {
		pickValueOnSlider(value: number): Chainable<Element>
	}
}

Cypress.Commands.add('pickValueOnSlider', value => {
	cy.contains(value).click()
})
