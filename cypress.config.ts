import { defineConfig } from 'cypress'
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor')

export default defineConfig({
	projectId: 's1nswq',
	e2e: {
		video: false,
		watchForFileChanges: false,
		waitForAnimations: true,
		animationDistanceThreshold: 5,
		defaultCommandTimeout: 10000,
		pageLoadTimeout: 10000,

		setupNodeEvents(on, config) {
			const options = {
				...browserify.defaultOptions,
				typescript: require.resolve('typescript'),
			}
			on('file:preprocessor', cucumber(options))
		},
	},
})
