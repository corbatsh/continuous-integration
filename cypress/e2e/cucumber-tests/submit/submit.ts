import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill developer name', () => {
	cy.fillDeveloperName()
})

When('I click submit button', () => {
	cy.clickSubmitButton()
})

Then('I see Thank You header', () => {
	cy.shouldSeeThankYouHeader()
})
