const baseUrl = 'https://devexpress.github.io/testcafe/example/'

declare namespace Cypress {
	interface Chainable {
		visitBasePage(): Chainable<Element>
		checkH1(): Chainable<Element>
	}
}

Cypress.Commands.add('visitBasePage', () => {
	cy.visit(baseUrl)
})

Cypress.Commands.add('checkH1', () => {
	cy.get('h1').contains('Example')
})
