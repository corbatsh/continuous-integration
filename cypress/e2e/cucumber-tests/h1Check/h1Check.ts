import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then('I check if h1 contains Example', () => {
	cy.checkH1()
})
