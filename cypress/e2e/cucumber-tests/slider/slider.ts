import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then('I pick {int} on the slider', value => {
	cy.pickValueOnSlider(value)
})
