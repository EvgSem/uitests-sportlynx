exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
    'features/*.feature' // this gets ignored when running from gulp!
  	],
	capabilities: {
    'browserName': 'chrome'
  },
  cucumberOpts: {
    format: 'pretty',
    keepAlive: false,
    require: [
      'methods/*.steps.js',
      'features/env.js',
      'node_modules/cucumberjs-junitxml/reporter/reporter.js'
    ],
  },
}