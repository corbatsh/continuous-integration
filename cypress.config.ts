import { defineConfig } from 'cypress'
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor')

export default defineConfig({
	projectId: 's1nswq',
	video: false,
	animationDistanceThreshold: 20,
	defaultCommandTimeout: 4000,
	pageLoadTimeout: 10000,
	watchForFileChanges: false,
	e2e: {
		setupNodeEvents(on, config) {
			const options = {
				...browserify.defaultOptions,
				typescript: require.resolve('typescript'),
			}
			on('file:preprocessor', cucumber(options))
		},
		excludeSpecPattern: ['*.ts', '*.md'],
		specPattern: '**/*.{feature,features}',
	},
})
