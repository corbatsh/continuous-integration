const developerNameInput = '#developer-name'
const developerName = 'Mike'
const testCafeCheckbox = '#tried-test-cafe'
const submitButton = '#submit-button'
const articleHeader = '#article-header'

declare namespace Cypress {
	interface Chainable {
		fillDeveloperName(): Chainable<Element>
		clickTestCafeCheckbox(): Chainable<Element>
		clickSubmitButton(): Chainable<Element>
		shouldSeeThankYouHeader(): Chainable<Element>
	}
}

Cypress.Commands.add('fillDeveloperName', () => {
	cy.get(developerNameInput).type(developerName)
})

Cypress.Commands.add('clickTestCafeCheckbox', () => {
	cy.get(testCafeCheckbox).click()
})

Cypress.Commands.add('clickSubmitButton', () => {
	cy.get(submitButton).click()
})

Cypress.Commands.add('shouldSeeThankYouHeader', () => {
	cy.get(articleHeader).contains('Thank you')
})
