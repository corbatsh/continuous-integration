const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		video: false,
		watchForFileChanges: false,
		waitForAnimations: true,
		animationDistanceThreshold: 20,
		defaultCommandTimeout: 10000,
		pageLoadTimeout: 10000,
		setupNodeEvents(on, config) {},
	},
})
