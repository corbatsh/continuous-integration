import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I select {string} from selectBox', option => {
	cy.selectAnOption(option)
})

Then('I see {string} in selectBox', option => {
	cy.testChosenOption(option)
})
