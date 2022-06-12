import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then('I pick 5 on the slider', () => {
	cy.contains('5').click()
})
