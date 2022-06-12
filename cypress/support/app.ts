const baseUrl = 'https://devexpress.github.io/testcafe/example/'

declare namespace Cypress {
	interface Chainable {
		visitBasePage(): Chainable<Element>
	}
}

Cypress.Commands.add('visitBasePage', () => {
	cy.visit(baseUrl)
})
