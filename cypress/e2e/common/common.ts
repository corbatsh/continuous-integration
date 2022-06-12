import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} seconds', time => {
	cy.wait(time * 1000)
})

defineStep('I see {string} in the title', title => {
	cy.title().should('include', title)
})

defineStep('I see {string} in the url', url => {
	cy.url().should('include', url)
})

defineStep('I reload the browser', () => {
	cy.reload()
})

defineStep('I open basePage', () => {
	cy.visitBasePage()
})

defineStep('I click the checkbox "I have tried TestCafe"', () => {
	cy.clickTestCafeCheckbox()
})
